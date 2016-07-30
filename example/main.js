import Uppy from '../src/core/Core.js'
import Modal from '../src/plugins/Modal'
import Dummy from '../src/plugins/Dummy'
import GoogleDrive from '../src/plugins/GoogleDrive'
import ProgressBar from '../src/plugins/ProgressBar'
import Tus10 from '../src/plugins/Tus10'
import MetaData from '../src/plugins/MetaData'

import MagicLog from '../src/plugins/MagicLog'

const uppy = new Uppy({debug: true})
  .use(Modal, {trigger: '#uppyModalOpener'})
  .use(GoogleDrive, {target: Modal, host: 'http://ya.ru'})
  .use(Dummy, {target: Modal})
  .use(ProgressBar, {target: Modal})
  .use(Tus10, {endpoint: 'http://master.tus.io:8080/files/'})
  .use(MetaData, {
    fields: [
      {
        name: 'resizeTo',
        value: 1200,
        placeholder: 'specify future image size'
      },
      {
        name: 'description',
        value: '',
        placeholder: 'describe what the file is for'
      }
    ]
  })
  .use(MagicLog)

uppy.run()

document.querySelector('#uppyModalOpener').click()
