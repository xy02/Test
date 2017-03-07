import types from './types'

// initial state
const state = {
  program:null,
  selectedApp:null,
  selectedAppItem:null,
  margin: 5,
}

// getters
const getters = {

}

// actions
const actions = {

}

// mutations
const mutations = {
  [types.PROGRAM_ON_LOADED](state, program){
    state.selectedApp = state.program = program
  },
  [types.SELECT_APP] (state, { app }) {
    
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}