import * as types from '../mutation-types'

const state = {
  name: undefined,
  isLogin: false
}

const mutations = {
  [types.UPDATE_LOGIN_INFO] (state, account) {
    state.name = account.name
    state.isLogin = account.isLogin
  }
}

const actions = {
  updateLoginInfo ({ commit }, account) {
    commit(types.UPDATE_LOGIN_INFO, account)
  }
}

export default {
  state,
  mutations,
  actions
}
