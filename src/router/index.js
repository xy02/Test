import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var routes = [
  { path: '/', component: require('../components/Index.vue') },
  { path: '/editor', component: require( '../components/editor/ProgramEditor.vue') }
]

export default new VueRouter({
  routes 
})