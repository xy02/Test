import Vue from 'vue'
import Main from './components/Main.vue'
import store from './store'
import router from './router'
import {} from './locales'


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(Main)
})
