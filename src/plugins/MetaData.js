import Plugin from './Plugin'

/**
 * Meta Data
 * Adds metadata fields to Uppy
 *
 */
export default class MetaData extends Plugin {
  constructor (core, opts) {
    super(core, opts)
    this.type = 'modifier'
    this.id = 'MetaData'
    this.title = 'Meta Data'

    // set default options
    const defaultOptions = {}

    // merge default options with the ones set by user
    this.opts = Object.assign({}, defaultOptions, opts)
  }

  addInitialMeta () {
    const metaFields = this.opts.fields

    this.core.setState({
      metaFields: metaFields
    })

    this.core.emitter.on('file-added', (fileID) => {
      metaFields.forEach((item) => {
        const obj = {}
        obj[item.name] = item.value
        this.core.updateMeta(obj, fileID)
      })
    })
  }

  install () {
    console.log(this.opts.fields)
    this.addInitialMeta()
  }
}
