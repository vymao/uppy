const html = require('yo-yo')

// https://css-tricks.com/creating-svg-icon-system-react/

function defaultTabIcon () {
  return html`<svg class="UppyIcon" width="30" height="30" viewBox="0 0 30 30">
    <path d="M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z" />
  </svg>`
}

function iconCopy () {
  return html`<svg class="UppyIcon" width="51" height="51" viewBox="0 0 51 51">
    <path d="M17.21 45.765a5.394 5.394 0 0 1-7.62 0l-4.12-4.122a5.393 5.393 0 0 1 0-7.618l6.774-6.775-2.404-2.404-6.775 6.776c-3.424 3.427-3.424 9 0 12.426l4.12 4.123a8.766 8.766 0 0 0 6.216 2.57c2.25 0 4.5-.858 6.214-2.57l13.55-13.552a8.72 8.72 0 0 0 2.575-6.213 8.73 8.73 0 0 0-2.575-6.213l-4.123-4.12-2.404 2.404 4.123 4.12a5.352 5.352 0 0 1 1.58 3.81c0 1.438-.562 2.79-1.58 3.808l-13.55 13.55z"/>
    <path d="M44.256 2.858A8.728 8.728 0 0 0 38.043.283h-.002a8.73 8.73 0 0 0-6.212 2.574l-13.55 13.55a8.725 8.725 0 0 0-2.575 6.214 8.73 8.73 0 0 0 2.574 6.216l4.12 4.12 2.405-2.403-4.12-4.12a5.357 5.357 0 0 1-1.58-3.812c0-1.437.562-2.79 1.58-3.808l13.55-13.55a5.348 5.348 0 0 1 3.81-1.58c1.44 0 2.792.562 3.81 1.58l4.12 4.12c2.1 2.1 2.1 5.518 0 7.617L39.2 23.775l2.404 2.404 6.775-6.777c3.426-3.427 3.426-9 0-12.426l-4.12-4.12z"/>
  </svg>`
}

function iconResume () {
  return html`<svg class="UppyIcon" width="25" height="25" viewBox="0 0 44 44">
    <polygon class="play" transform="translate(6, 5.5)" points="13 21.6666667 13 11 21 16.3333333" />
  </svg>`
}

function iconPause () {
  return html`<svg class="UppyIcon" width="25px" height="25px" viewBox="0 0 44 44">
    <g transform="translate(18, 17)" class="pause">
      <rect x="0" y="0" width="2" height="10" rx="0" />
      <rect x="6" y="0" width="2" height="10" rx="0" />
    </g>
  </svg>`
}

function iconEdit () {
  return html`<svg class="UppyIcon" width="28" height="28" viewBox="0 0 28 28">
    <path d="M25.436 2.566a7.98 7.98 0 0 0-2.078-1.51C22.638.703 21.906.5 21.198.5a3 3 0 0 0-1.023.17 2.436 2.436 0 0 0-.893.562L2.292 18.217.5 27.5l9.28-1.796 16.99-16.99c.255-.254.444-.56.562-.888a3 3 0 0 0 .17-1.023c0-.708-.205-1.44-.555-2.16a8 8 0 0 0-1.51-2.077zM9.01 24.252l-4.313.834c0-.03.008-.06.012-.09.007-.944-.74-1.715-1.67-1.723-.04 0-.078.007-.118.01l.83-4.29L17.72 5.024l5.264 5.264L9.01 24.252zm16.84-16.96a.818.818 0 0 1-.194.31l-1.57 1.57-5.26-5.26 1.57-1.57a.82.82 0 0 1 .31-.194 1.45 1.45 0 0 1 .492-.074c.397 0 .917.126 1.468.397.55.27 1.13.678 1.656 1.21.53.53.94 1.11 1.208 1.655.272.55.397 1.07.393 1.468.004.193-.027.358-.074.488z" />
  </svg>`
}

function localIcon () {
  return html`<svg class="UppyIcon" width="27" height="25" viewBox="0 0 27 25">
    <path d="M5.586 9.288a.313.313 0 0 0 .282.176h4.84v3.922c0 1.514 1.25 2.24 2.792 2.24 1.54 0 2.79-.726 2.79-2.24V9.464h4.84c.122 0 .23-.068.284-.176a.304.304 0 0 0-.046-.324L13.735.106a.316.316 0 0 0-.472 0l-7.63 8.857a.302.302 0 0 0-.047.325z"/>
    <path d="M24.3 5.093c-.218-.76-.54-1.187-1.208-1.187h-4.856l1.018 1.18h3.948l2.043 11.038h-7.193v2.728H9.114v-2.725h-7.36l2.66-11.04h3.33l1.018-1.18H3.907c-.668 0-1.06.46-1.21 1.186L0 16.456v7.062C0 24.338.676 25 1.51 25h23.98c.833 0 1.51-.663 1.51-1.482v-7.062L24.3 5.093z"/>
  </svg>`
}

function closeIcon () {
  return html`<svg class="UppyIcon" width="14px" height="14px" viewBox="0 0 19 19">
    <path d="M17.318 17.232L9.94 9.854 9.586 9.5l-.354.354-7.378 7.378h.707l-.62-.62v.706L9.318 9.94l.354-.354-.354-.354L1.94 1.854v.707l.62-.62h-.706l7.378 7.378.354.354.354-.354 7.378-7.378h-.707l.622.62v-.706L9.854 9.232l-.354.354.354.354 7.378 7.378.708-.707-7.38-7.378v.708l7.38-7.38.353-.353-.353-.353-.622-.622-.353-.353-.354.352-7.378 7.38h.708L2.56 1.23 2.208.88l-.353.353-.622.62-.353.355.352.353 7.38 7.38v-.708l-7.38 7.38-.353.353.352.353.622.622.353.353.354-.353 7.38-7.38h-.708l7.38 7.38z"/>
  </svg>`
}

function pluginIcon () {
  return html`<svg class="UppyIcon" width="16px" height="16px" viewBox="0 0 32 30">
      <path d="M6.6209894,11.1451162 C6.6823051,11.2751669 6.81374248,11.3572188 6.95463813,11.3572188 L12.6925482,11.3572188 L12.6925482,16.0630427 C12.6925482,17.880509 14.1726048,18.75 16.0000083,18.75 C17.8261072,18.75 19.3074684,17.8801847 19.3074684,16.0630427 L19.3074684,11.3572188 L25.0437478,11.3572188 C25.1875787,11.3572188 25.3164069,11.2751669 25.3790272,11.1451162 C25.4370814,11.0173358 25.4171865,10.8642587 25.3252129,10.7562615 L16.278212,0.127131837 C16.2093949,0.0463771751 16.1069846,0 15.9996822,0 C15.8910751,0 15.7886648,0.0463771751 15.718217,0.127131837 L6.6761083,10.7559371 C6.58250402,10.8642587 6.56293518,11.0173358 6.6209894,11.1451162 L6.6209894,11.1451162 Z"/>
      <path d="M28.8008722,6.11142645 C28.5417891,5.19831555 28.1583331,4.6875 27.3684848,4.6875 L21.6124454,4.6875 L22.8190234,6.10307874 L27.4986725,6.10307874 L29.9195817,19.3486449 L21.3943891,19.3502502 L21.3943891,22.622552 L10.8023461,22.622552 L10.8023461,19.3524977 L2.07815702,19.3534609 L5.22979699,6.10307874 L9.17871529,6.10307874 L10.3840011,4.6875 L4.6308691,4.6875 C3.83940559,4.6875 3.37421888,5.2390909 3.19815864,6.11142645 L0,19.7470874 L0,28.2212959 C0,29.2043992 0.801477937,30 1.78870751,30 L30.2096773,30 C31.198199,30 32,29.2043992 32,28.2212959 L32,19.7470874 L28.8008722,6.11142645 L28.8008722,6.11142645 Z"/>
    </svg>`
}

function checkIcon () {
  return html`<svg class="UppyIcon UppyIcon-check" width="13px" height="9px" viewBox="0 0 13 9">
    <polygon points="5 7.293 1.354 3.647 0.646 4.354 5 8.707 12.354 1.354 11.646 0.647"></polygon>
  </svg>`
}

function iconAudio () {
  return html`<svg class="UppyIcon" width="34" height="91" viewBox="0 0 34 91">
    <path d="M22.366 43.134V29.33c5.892-6.588 10.986-14.507 10.986-22.183 0-4.114-2.986-7.1-7.1-7.1-3.914 0-7.1 3.186-7.1 7.1v20.936a92.562 92.562 0 0 1-5.728 5.677l-.384.348C4.643 41.762.428 45.604.428 54.802c0 8.866 7.214 16.08 16.08 16.08.902 0 1.784-.074 2.644-.216v11.26c0 2.702-2.198 4.9-4.9 4.9a4.855 4.855 0 0 1-2.95-1.015c2.364-.24 4.222-2.218 4.222-4.643a4.698 4.698 0 0 0-4.692-4.692 4.738 4.738 0 0 0-4.213 2.628c-.923 1.874-.56 4.386.277 6.228a7.82 7.82 0 0 0 .9 1.502 8.178 8.178 0 0 0 4.23 2.896c.723.207 1.474.31 2.226.31 4.474 0 8.113-3.64 8.113-8.113V69.78c5.98-2.345 10.225-8.176 10.225-14.977 0-5.975-4.464-10.876-10.224-11.67zm0-35.987a3.89 3.89 0 0 1 3.887-3.885c1.933 0 3.885 1.202 3.885 3.885 0 4.95-2.702 10.862-7.772 17.204V7.148zM16.51 67.67c-7.096 0-12.867-5.77-12.867-12.867 0-7.78 3.385-10.865 11.563-18.32l.384-.35c1.166-1.064 2.365-2.2 3.562-3.402v10.404c-5.758.793-10.223 5.695-10.223 11.67 0 3.935 1.948 7.603 5.212 9.81a1.605 1.605 0 1 0 1.8-2.66 8.622 8.622 0 0 1-3.8-7.15c0-4.2 3.025-7.7 7.01-8.456v21.05c-.853.178-1.736.272-2.642.272zm5.856-1.412v-19.91c3.985.756 7.01 4.253 7.01 8.455 0 4.987-2.85 9.32-7.01 11.455z" />
  </svg>`
}

function iconFile () {
  return html`<svg class="UppyIcon" width="44" height="58" viewBox="0 0 44 58">
    <path d="M27.437.517a1 1 0 0 0-.094.03H4.25C2.037.548.217 2.368.217 4.58v48.405c0 2.212 1.82 4.03 4.03 4.03H39.03c2.21 0 4.03-1.818 4.03-4.03V15.61a1 1 0 0 0-.03-.28 1 1 0 0 0 0-.093 1 1 0 0 0-.03-.032 1 1 0 0 0 0-.03 1 1 0 0 0-.032-.063 1 1 0 0 0-.03-.063 1 1 0 0 0-.032 0 1 1 0 0 0-.03-.063 1 1 0 0 0-.032-.03 1 1 0 0 0-.03-.063 1 1 0 0 0-.063-.062l-14.593-14a1 1 0 0 0-.062-.062A1 1 0 0 0 28 .708a1 1 0 0 0-.374-.157 1 1 0 0 0-.156 0 1 1 0 0 0-.03-.03l-.003-.003zM4.25 2.547h22.218v9.97c0 2.21 1.82 4.03 4.03 4.03h10.564v36.438a2.02 2.02 0 0 1-2.032 2.032H4.25c-1.13 0-2.032-.9-2.032-2.032V4.58c0-1.13.902-2.032 2.03-2.032zm24.218 1.345l10.375 9.937.75.718H30.5c-1.13 0-2.032-.9-2.032-2.03V3.89z" />
  </svg>`
}

function iconText () {
  return html`<svg class="UppyIcon" width="50" height="63" viewBox="0 0 50 63">
    <path d="M0 .5v15.617h6.25l1.7-5.1a6.242 6.242 0 0 1 5.933-4.267h8V50.5c0 3.45-2.8 6.25-6.25 6.25H12.5V63h25v-6.25h-3.133c-3.45 0-6.25-2.8-6.25-6.25V6.75h8a6.257 6.257 0 0 1 5.933 4.267l1.7 5.1H50V.5H0z" />
  </svg>`
}

function uploadIcon () {
  return html`<svg class="UppyIcon" width="37" height="33" viewBox="0 0 37 33">
    <path d="M29.107 24.5c4.07 0 7.393-3.355 7.393-7.442 0-3.994-3.105-7.307-7.012-7.502l.468.415C29.02 4.52 24.34.5 18.886.5c-4.348 0-8.27 2.522-10.138 6.506l.446-.288C4.394 6.782.5 10.758.5 15.608c0 4.924 3.906 8.892 8.76 8.892h4.872c.635 0 1.095-.467 1.095-1.104 0-.636-.46-1.103-1.095-1.103H9.26c-3.644 0-6.63-3.035-6.63-6.744 0-3.71 2.926-6.685 6.57-6.685h.964l.14-.28.177-.362c1.477-3.4 4.744-5.576 8.347-5.576 4.58 0 8.45 3.452 9.01 8.072l.06.536.05.446h1.101c2.87 0 5.204 2.37 5.204 5.295s-2.333 5.296-5.204 5.296h-6.062c-.634 0-1.094.467-1.094 1.103 0 .637.46 1.104 1.094 1.104h6.12z"/>
    <path d="M23.196 18.92l-4.828-5.258-.366-.4-.368.398-4.828 5.196a1.13 1.13 0 0 0 0 1.546c.428.46 1.11.46 1.537 0l3.45-3.71-.868-.34v15.03c0 .64.445 1.118 1.075 1.118.63 0 1.075-.48 1.075-1.12V16.35l-.867.34 3.45 3.712a1 1 0 0 0 .767.345 1 1 0 0 0 .77-.345c.416-.33.416-1.036 0-1.485v.003z"/>
  </svg>`
}

function dashboardBgIcon () {
  return html`<svg class="UppyIcon" width="48" height="69" viewBox="0 0 48 69">
    <path d="M.5 1.5h5zM10.5 1.5h5zM20.5 1.5h5zM30.504 1.5h5zM45.5 11.5v5zM45.5 21.5v5zM45.5 31.5v5zM45.5 41.502v5zM45.5 51.502v5zM45.5 61.5v5zM45.5 66.502h-4.998zM35.503 66.502h-5zM25.5 66.502h-5zM15.5 66.502h-5zM5.5 66.502h-5zM.5 66.502v-5zM.5 56.502v-5zM.5 46.503V41.5zM.5 36.5v-5zM.5 26.5v-5zM.5 16.5v-5zM.5 6.5V1.498zM44.807 11H36V2.195z"/>
  </svg>`
}

module.exports = {
  defaultTabIcon,
  iconCopy,
  iconResume,
  iconPause,
  iconEdit,
  localIcon,
  closeIcon,
  pluginIcon,
  checkIcon,
  iconAudio,
  iconFile,
  iconText,
  uploadIcon,
  dashboardBgIcon
}
