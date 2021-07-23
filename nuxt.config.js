export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Power GYM',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'El mejor gimnasio del area' },
      { name: 'keywords', content: 'gym, fitness, zumba, pilates, pesas' },
      { name: 'robots', content: 'index, follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/index.jpeg' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-LBEEYVG19E',
        defer: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "bulma",
    "@/styles/global.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es'
    },
    meta: {
      lang: 'es',
      ogType: 'website',
      ogSiteName: 'Power GYM',
      ogTitle: 'Power GYM',
      ogDescription: 'El mejor gimnasio del area, en el cual podras llevar tu estilo de vida al siguiente nivel',
    },
    workbox: {
      workboxVersion: '1',
      autoRegister: true,
      preCaching: ['googletagmanager.js']
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
