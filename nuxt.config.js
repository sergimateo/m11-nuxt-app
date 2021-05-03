// eslint-disable-next-line prettier/prettier
// import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - m11-nuxt',
    title: 'm11-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Marvel:400,700',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // si esta instalado como modulo de node.js
    'animate.css',
    // si tenemos el fichero .css o .sass en assets/css/:
    // '~/assets/css/animate.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/data/data.js',
    '~/plugins/ApiMarvelPlaceholder.js',
    '~/plugins/MarvelPlaceholderService.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // loading component
  loading: {
    color: 'coral',
    height: '10px',
    continuous: true,
    duration: 2000,
  },
  // loading: '~/components/ExampleLoadingComponent.vue',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        options: { customProperties: true },
        light: {
          // primary: colors.amber.lighten1,
          // secondary: colors.blue.darken1,
          // accent: colors.amber.accent2,
          // error: colors.red.lighten2,
          // warning: colors.orange.base,
          // info: colors.deepOrange.lighten1,
          // tabs: colors.deepOrange.lighten1,
          // mostvisited: colors.green.base,
          // background: colors.indigo.lighten5,
        },
        dark: {
          // primary: colors.lightGreen.darken4,
          // secondary: colors.purple.darken3,
          // accent: colors.lightGreen.base,
          // error: colors.red.darken4,
          // warning: colors.orange.base,
          // info: colors.lightGreen.darken3,
          // success: colors.green.base,
          // si pongo customProperties true, puedo
          // crear nuevas variables a parte de las default
          // header: colors.red.base,
          // footer: colors.red.darken3,
          // mostvisited: colors.green.base,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
