import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './types'

import aData from './analytics.json'
import bData from './ventureDetails.json'

Vue.use(Vuex)

const ANALYTICS_DATA = aData
const VENTURE_DETAILS_DATA = bData

const options = {
  state: {
    analyticsSummary: [],
    ventureDetails: []
  },
  mutations: {
    [types.SET_ANALYTICS_SUMMARY]: (state, { list }) => {
      state.analyticsSummary = list
    },
    [types.SET_VENTURE_DETAILS]: (state, { list }) => {
      console.log(list)
      state.ventureDetails = list
    }
  },
  actions: {
    [types.LOAD_ANALYTICS_SUMMARY]: function ({ commit }) {
      commit(types.SET_ANALYTICS_SUMMARY, { list: ANALYTICS_DATA })
    },
    [types.LOAD_VENTURE_DETAILS]: function ({ commit }) {
      commit(types.SET_VENTURE_DETAILS, { list: VENTURE_DETAILS_DATA })
    }
  }
}

const store = new Vuex.Store({ ...options })

export default store
