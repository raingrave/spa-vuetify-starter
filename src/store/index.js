import Vue from 'vue'
import Vuex from 'vuex'
import Application from '@/store/modules/application'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Application
  }
})
