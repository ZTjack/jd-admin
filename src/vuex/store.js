import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  account: undefined,
  isAuth: false
}

const mutations = {
  LOGIN (state, account) {
    state.account = account
    state.isAuth = true
  },
  LOGOUT (state) {
    state.account = undefined
    state.isAuth = false
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
