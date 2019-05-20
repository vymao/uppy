#!/usr/bin/env node
// Upload Uppy releases to Edgly.net CDN. Copyright (c) 2018, Transloadit Ltd.
//
// This file:
//
//  - Assumes EDGLY_KEY and EDGLY_SECRET are available (e.g. set via Travis secrets)
//  - Tries to load env.sh instead, if not
//  - Checks if a tag is being built (on Travis - otherwise opts to continue execution regardless)
//  - Assumed a fully built uppy is in root dir (unless a specific tag was specified, then it's fetched from npm)
//  - Runs npm pack, and stores files to e.g. https://transloadit.edgly.net/releases/uppy/v1.0.1/uppy.css
//  - Uses local package by default, if [version] argument was specified, takes package from npm
//
// Run as:
//
//  ./upload-to-cdn.sh [version]
//
// To upload all versions in one go (DANGER):
//
//  git tag |awk -Fv '{print "./bin/upload-to-cdn.sh "$2}' |bash
//
// Authors:
//
//  - Kevin van Zonneveld <kevin@transloadit.com>

const path = require('path')
const AWS = require('aws-sdk')
const packlist = require('npm-packlist')
const tar = require('tar')
const pacote = require('pacote')
const concat = require('concat-stream')
const { promisify } = require('util')
const readFile = promisify(require('fs').readFile)
const finished = promisify(require('stream').finished)

const AWS_REGION = 'us-east-1'
const AWS_BUCKET = 'crates.edgly.net'
const AWS_DIRECTORY = '756b8efaed084669b02cb99d4540d81f/default'

async function getRemoteDistFiles (packageName, version) {
  const files = new Map()
  const tarball = pacote.tarball.stream(`${packageName}@${version}`)
    .pipe(new tar.Parse())

  tarball.on('entry', (readEntry) => {
    if (readEntry.path.startsWith('package/dist/')) {
      readEntry
        .pipe(concat((buf) => {
          files.set(readEntry.path.replace(/^package\/dist\//, ''), buf)
        }))
        .on('error', (err) => {
          tarball.emit('error', err)
        })
    } else {
      readEntry.resume()
    }
  })

  await finished(tarball)
  return files
}

async function getLocalDistFiles (packagePath) {
  const files = (await packlist({ path: packagePath }))
    .filter(f => f.startsWith('dist/'))
    .map(f => f.replace(/^dist\//, ''))

  const entries = await Promise.all(
    files.map(async (f) => [
      f,
      await readFile(path.join(packagePath, 'dist', f))
    ])
  )

  return new Map(entries)
}

async function main (packageName, version) {
  if (!packageName) {
    console.error('usage: upload-to-cdn <packagename> [version]')
    console.error('Must provide a package name')
    process.exit(1)
  }

  if (!process.env.EDGLY_KEY || !process.env.EDGLY_SECRET) {
    console.error('Missing EDGLY_KEY or EDGLY_SECRET env variables, bailing')
    process.exit(1)
  }

  const s3 = new AWS.S3({
    credentials: new AWS.Credentials({
      accessKeyId: process.env.EDGLY_KEY,
      secretAccessKey: process.env.EDGLY_SECRET
    }),
    region: AWS_REGION
  })

  const remote = !!version
  if (!remote) {
    version = require(`../packages/${packageName}/package.json`).version
  }

  const packagePath = remote
    ? `${packageName}@${version}`
    : path.join(__dirname, '..', 'packages', packageName)

  const files = remote
    ? await getRemoteDistFiles(packageName, version)
    : await getLocalDistFiles(packagePath)

  // uppy → releases/uppy/
  // @uppy/robodog → releases/uppy/robodog/
  // @uppy/locales → releases/uppy/locales/
  const dirName = packageName.startsWith('@uppy/')
    ? packageName.replace(/^@/, '')
    : 'uppy'

  const outputPath = path.posix.join('releases', dirName, `v${version}`)

  for (const [filename, buffer] of files.entries()) {
    const key = path.posix.join(AWS_DIRECTORY, outputPath, filename)
    console.log(`pushing s3://${AWS_BUCKET}/${key}`)
    await s3.putObject({
      Bucket: AWS_BUCKET,
      Key: key,
      Body: buffer
    }).promise()
  }
}

main(...process.argv.slice(2)).catch((err) => {
  console.error(err.stack)
  process.exit(1)
})
