import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import axios from 'axios'
const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    user: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
    axios.defaults.headers.common['Authorization'] = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USERINFO: (state, data) => {
    state.user = data
  }
}

const actions = {
  // save
  saveToken({ commit }, token) {
    commit('SET_TOKEN', token)
    setToken(token)
  },
  // get user info

  setInfo({ commit }, data) {
    const { displayName } = data
    commit('SET_NAME', displayName)
    // commit('SET_AVATAR', avatar)
    commit('SET_USERINFO', data)
  },
  // clear auth
  clearAuth({ commit }) {
    removeToken() // must remove  token  first
    resetRouter()
    commit('RESET_STATE')
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

