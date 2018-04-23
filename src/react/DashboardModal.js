const React = require('react')
const PropTypes = require('prop-types')
const DashboardPlugin = require('../plugins/Dashboard')
const basePropTypes = require('./propTypes')

const h = React.createElement

/**
 * React Component that renders a Dashboard for an Uppy instance in a Modal
 * dialog. Visibility of the Modal is toggled using the `open` prop.
 */

class DashboardModal extends React.Component {
  componentDidMount () {
    const uppy = this.props.uppy
    const options = Object.assign(
      {},
      this.props,
      {
        onRequestCloseModal: this.props.onRequestClose
      }
    )

    if (!options.target) {
      options.target = this.container
    }

    delete options.uppy
    uppy.use(DashboardPlugin, options)

    this.plugin = uppy.getPlugin('Dashboard')
    if (this.props.open) {
      this.plugin.openModal()
    }
  }

  componentWillUnmount () {
    const uppy = this.props.uppy

    uppy.removePlugin(this.plugin)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.open && !nextProps.open) {
      this.plugin.closeModal()
    } else if (!this.props.open && nextProps.open) {
      this.plugin.openModal()
    }
  }

  render () {
    return h('div', {
      ref: (container) => {
        this.container = container
      }
    })
  }
}

DashboardModal.propTypes = Object.assign({
  // Only check this prop type in the browser.
  target: typeof window !== 'undefined' ? PropTypes.instanceOf(window.HTMLElement) : PropTypes.any,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func
}, basePropTypes)

DashboardModal.defaultProps = {
}

module.exports = DashboardModal
