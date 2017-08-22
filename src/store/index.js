import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/menu'
import app from './modules/app'
import account from './modules/account'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,  // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    menu,
    app,
    account
  },
  state: {},
  mutations: {}
})

export default store
