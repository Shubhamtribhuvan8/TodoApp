import { createStore } from "vuex";

const store = createStore({
  state: {
    userData: {
      userName: "",
      email: "",
      password: "",
    },
    postData: [],
    historyData: [],
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
    setPostData(state, postData) {
      state.postData = postData;
    },
    addToHistoryData(state, data) {
      state.historyData.push(data);
    },
    clearPostData(state) {
      state.postData = [];
    },
  },
  actions: {
    setUserData({ commit }, userData) {
      commit("setUserData", userData);
    },
    setPostData({ commit }, postData) {
      commit("setPostData", postData);
    },
    addToHistoryData({ commit }, data) {
      commit("addToHistoryData", data);
    },
    clearPostData({ commit }) {
      commit("clearPostData");
    },
  },
  getters: {
    getUserData(state) {
      return state.userData;
    },
    getPostData(state) {
      return state.postData;
    },
    getHistoryData(state) {
      return state.historyData;
    },
  },
});

export default store;
