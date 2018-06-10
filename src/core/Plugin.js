const preact = require('preact')
const { findDOMElement } = require('../core/Utils')

/**
 * Defer a frequent call to the microtask queue.
 */
// function debounce (fn) {
//   let calling = null
//   let latestArgs = null
//   return (...args) => {
//     latestArgs = args
//     if (!calling) {
//       calling = Promise.resolve().then(() => {
//         calling = null
//         // At this point `args` may be different from the most
//         // recent state, if multiple calls happened since this task
//         // was queued. So we use the `latestArgs`, which definitely
//         // is the most recent call.
//         return fn(...latestArgs)
//       })
//     }
//     return calling
//   }
// }

class PreactWrapper extends preact.Component {
  constructor (props) {
    super()
    this.uppy = props.uppy
    this.state = this.uppy.getState()
    this.onUppyState = this.onUppyState.bind(this)
  }

  componentDidMount () {
    this.uppy.on('state-update', this.onUppyState)
  }

  onUppyState (prevState, nextState, patch) {
    this.setState(nextState)
  }

  render () {
    return this.props.render(this.state)
  }
}

/**
 * Boilerplate that all Plugins share - and should not be used
 * directly. It also shows which methods final plugins should implement/override,
 * this deciding on structure.
 *
 * @param {object} main Uppy core object
 * @param {object} object with plugin options
 * @return {array | string} files or success/fail message
 */
module.exports = class Plugin {
  constructor (uppy, opts) {
    this.uppy = uppy
    this.opts = opts || {}

    // this.update = this.update.bind(this)
    this.mount = this.mount.bind(this)
    this.install = this.install.bind(this)
    this.uninstall = this.uninstall.bind(this)
  }

  getPluginState () {
    const { plugins } = this.uppy.getState()
    return plugins[this.id]
  }

  setPluginState (update) {
    const plugins = Object.assign({}, this.uppy.getState().plugins)
    plugins[this.id] = Object.assign({}, plugins[this.id], update)

    this.uppy.setState({
      plugins: plugins
    })
  }

  // update (state) {
  //   if (typeof this.el === 'undefined') {
  //     return
  //   }

  //   if (this._updateUI) {
  //     this._updateUI(state)
  //   }
  // }

  /**
   * Check if supplied `target` is a DOM element or an `object`.
   * If it’s an object — target is a plugin, and we search `plugins`
   * for a plugin with same name and return its target.
   *
   * @param {String|Object} target
   *
   */
  mount (target, plugin) {
    const callerPluginName = plugin.id

    const targetElement = findDOMElement(target)

    if (targetElement) {
      this.isTargetDOMEl = true

      // API for plugins that require a synchronous rerender.
      // this.rerender = (state) => {
        // this.el = preact.render(this.render(state), targetElement, this.el)
      // }
      // this._updateUI = debounce(this.rerender)

      // this._updateUI = () => {}

      this.uppy.log(`Installing ${callerPluginName} to a DOM element`)

      // clear everything inside the target container
      if (this.opts.replaceTargetContent) {
        targetElement.innerHTML = ''
      }

      this.el = preact.render(preact.h(PreactWrapper, {
        uppy: this.uppy,
        render: this.render
      }), targetElement)

      return this.el
    }

    let targetPlugin
    if (typeof target === 'object' && target instanceof Plugin) {
      // Targeting a plugin *instance*
      targetPlugin = target
    } else if (typeof target === 'function') {
      // Targeting a plugin type
      const Target = target
      // Find the target plugin instance.
      this.uppy.iteratePlugins((plugin) => {
        if (plugin instanceof Target) {
          targetPlugin = plugin
          return false
        }
      })
    }

    if (targetPlugin) {
      const targetPluginName = targetPlugin.id
      this.uppy.log(`Installing ${callerPluginName} to ${targetPluginName}`)
      this.el = targetPlugin.addTarget(plugin)
      return this.el
    }

    this.uppy.log(`Not installing ${callerPluginName}`)
    throw new Error(`Invalid target option given to ${callerPluginName}`)
  }

  render (state) {
    throw (new Error('Extend the render method to add your plugin to a DOM element'))
  }

  addTarget (plugin) {
    throw (new Error('Extend the addTarget method to add your plugin to another plugin\'s target'))
  }

  unmount () {
    if (this.el && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el)
    }
  }

  install () {

  }

  uninstall () {
    this.unmount()
  }
}
