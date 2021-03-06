import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const _api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/",
  timeout: 3000,
  headers: {
    "x-app-key": "8d5ce5f016cbab723455273590ad0d4a",
    "x-app-id": "d1e94f3c"
  }
});

export default new Vuex.Store({
  state: {
    foodItem: [],
    activeFood: {},
  },
  mutations: {
    setResults(state, data) {
      state.foodItem = data
    },
    setActiveFood(state, data) {
      state.activeFood = data
    }
  },
  actions: {
    async searchApi({ commit, dispatch }, query) {
      try {
        let res = await _api.get("search/instant?query=" + query)
        console.log(res.data.branded);
        commit("setResults", res.data.branded)
      } catch (error) {
        console.error(error);
      }
    },
    activeFoodItem({ commit, dispatch }, food) {
      commit('setActiveFood', food)
    }
  },
  modules: {
  }
})
