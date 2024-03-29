import blog from './content/blog.json'
import news from './content/news.json'
import jobs from './content/jobs.json'
import events from './content/events.json'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'ban | berlin architectural network',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Pathway+Gothic+One&text=LUTAS%20ANTICAPITAL&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Cardo|Lato&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/filters.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
    // '@nuxtjs/apollo'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  // Give apollo module options
  // apollo: {
  //   // tokenName: 'yourApolloTokenName', // optional, default: apollo-token
  //   cookieAttributes: {
  //     /**
  //      * Define when the cookie will be removed. Value can be a Number
  //      * which will be interpreted as days from time of creation or a
  //      * Date instance. If omitted, the cookie becomes a session cookie.
  //      */
  //     expires: 7, // optional, default: 7 (days)

  //     /**
  //      * Define the path where the cookie is available. Defaults to '/'
  //      */
  //     path: '/', // optional
  //     /**
  //      * Define the domain where the cookie is available. Defaults to
  //      * the domain of the page where the cookie was created.
  //      */
  //     domain: 'ban.berlin', // optional

  //     /**
  //      * A Boolean indicating if the cookie transmission requires a
  //      * secure protocol (https). Defaults to false.
  //      */
  //     secure: false
  //   },
  //   includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
  //   authenticationType: 'Basic', // optional, default: 'Bearer'
  //   // (Optional) Default 'apollo' definition
  //   defaultOptions: {
  //     // See 'apollo' definition
  //     // For example: default query options
  //     $query: {
  //       loadingKey: 'loading',
  //       fetchPolicy: 'cache-and-network'
  //     }
  //   },
  //   // optional
  //   errorHandler: '~/plugins/apollo-error-handler.js',
  //   // required
  //   clientConfigs: {
  //     default: {
  //       // required
  //       httpEndpoint: 'http://localhost:1337/graphql',
  //       // optional
  //       // See https://www.apollographql.com/docs/link/links/http.html#options
  //       httpLinkOptions: {
  //         credentials: 'same-origin'
  //       },
  //       // You can use `wss` for secure connection (recommended in production)
  //       // Use `null` to disable subscriptions
  //       wsEndpoint: null, // 'ws://localhost:4000', // optional
  //       // LocalStorage token
  //       tokenName: 'apollo-token', // optional
  //       // Enable Automatic Query persisting with Apollo Engine
  //       persisting: false // Optional
  //       // Use websockets for everything (no HTTP)
  //       // You need to pass a `wsEndpoint` for this to work
  //       // websocketsOnly: false // Optional
  //     },
  //     test: {
  //       httpEndpoint: 'http://localhost:5000',
  //       // wsEndpoint: 'ws://localhost:5000',
  //       tokenName: 'apollo-token'
  //     },
  //     // alternative: user path to config which returns exact same config options
  //     test2: '~/plugins/my-alternative-apollo-config.js'
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        // include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: 'dynamicMarkdown'
          }
        }
      })
    }
  },
  generate: {
    routes: [
      ...blog.map((blog) => `/blog/${blog.slug}`),
      ...news.map((news) => `/news/${news.slug}`),
      ...jobs.map((job) => `/jobs/${job.slug}`),
      ...events.map((event) => `/events/${event.slug}`)
    ]
  }
}
