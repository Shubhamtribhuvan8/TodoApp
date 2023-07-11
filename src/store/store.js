// Vuex store
import { createStore } from "vuex";

const store = createStore({
  state: {
    userData: {
      userName: "",
      email: "",
      password: "",
    },
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    setUserData({ commit }, userData) {
      commit("setUserData", userData);
    },
  },
  getters: {
    getUserData(state) {
      return state.userData;
    },
  },
});

export default store;
