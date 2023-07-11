import { createStore } from "vuex";

const store = createStore({
  state: {
    formData: {
      userName: "",
      email: "",
      password: "",
    },
  },
  mutations: {
    setFormData(state, payload) {
      state.formData = payload;
    },
  },
  actions: {
    setFormData({ commit }, payload) {
      commit("setFormData", payload);
    },
  },
});

export default store;
