const FileItem = require('./FileItem/index.js')
const classNames = require('classnames')
const { h } = require('preact')

module.exports = (props) => {
  const noFiles = props.totalFileCount === 0
  const dashboardFilesClass = classNames(
    'uppy-Dashboard-files',
    { 'uppy-Dashboard-files--noFiles': noFiles }
  )

  return (
    <ul
      class={dashboardFilesClass}
      // making <ul> not focusable for firefox
      tabindex="-1">
      {Object.keys(props.files).map((fileID) => (
        <FileItem
          {...props}
          file={props.files[fileID]}
        />
      ))}
    </ul>
  )
}
