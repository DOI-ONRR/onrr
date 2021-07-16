import Vue from 'vue'
import router from './router'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import vuetify from './plugins/vuetify'
import App from './App.vue'

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  uri: 'https://dev-onrr-cms.app.cloud.gov/graphql',
  cache
})

const clientA = new ApolloClient({
  uri: 'https://dev-onrr-cms.app.cloud.gov/graphql/system',
  cache
})

const clientB = new ApolloClient({
  uri: 'https://hasura-dev.app.cloud.gov/v1/graphql',
  cache
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  clients: {
    a: clientA,
    b: clientB
  },
})

Vue.config.productionTip = false
Vue.use(VueApollo)

new Vue({
  vuetify,
  apolloProvider,
  router,
  render: h => h(App)
}).$mount('#app')
