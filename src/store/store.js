// Vuex store
import { createStore } from "vuex";

const store = createStore({
  state: {
    userData: {
      userName: "",
      email: "",
      password: "",
    },
    postData: {
      Description: "",
    },
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
    setpostData(state, postData) {
      state.postData = postData;
    },
  },
  actions: {
    setUserData({ commit }, userData) {
      commit("setUserData", userData);
    },
    setpostData({ commit }, postData) {
      commit("setpostData", postData);
    },
  },
  getters: {
    getUserData(state) {
      return state.userData;
    },
    getpostData(state) {
      return state.postData;
    },
  },
});

export default store;
