export default {
  state: {
    appName: 'Application Name',
  },
  mutations: {
    setAppName (state, payload) {
      state.appName = payload
    }
  },
  actions: {
    changeAppName (context, payload) {
      context.commit('setAppName', payload)
    }
  },
  getters: {
    appName (state) {
      return state.appName
    }
  }
}