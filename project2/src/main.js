import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'
import vuetify from './plugins/vuetify'
import './scss/main.scss'
import Navbar from './components/Navbar'
import MainComponents from './components/Main'
import PopularComponents from './components/PopularPlaces'
import LocationComponents from './components/Location'
import LinkMap from './components/link-map'
import FooterComponents from './components/Footer'
import BackToTopComponents from './components/BackToTop'



Vue.component('Navbar', Navbar)
Vue.component('Main', MainComponents)
Vue.component('PopularPlaces',PopularComponents)
Vue.component('Location',LocationComponents)
Vue.component('link-map',LinkMap)
Vue.component('Footer', FooterComponents)
Vue.component('BackToTop', BackToTopComponents)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')



