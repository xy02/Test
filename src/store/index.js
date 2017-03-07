import Vue from 'vue'
import Vuex from 'vuex'
import editor from './editor'
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

//const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    // actions,
    // getters,
    modules: {
        editor,
    },
    //strict: debug,
    //plugins: debug ? [createLogger()] : []
})