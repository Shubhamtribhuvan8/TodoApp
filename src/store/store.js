// store.js
import { createStore } from "vuex";

const store = createStore({
  state: {
    userData: {
      userName: "",
      email: "",
      password: "",
    },
    todos: [],
    historyData: [],
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
    },
    addToHistoryData(state, data) {
      state.historyData.push(data);
    },
    clearTodos(state) {
      state.todos = [];
    },
  },
  actions: {
    setUserData({ commit }, userData) {
      commit("setUserData", userData);
    },
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    },
    deleteTodo({ commit }, index) {
      commit("deleteTodo", index);
    },
    addToHistoryData({ commit }, data) {
      commit("addToHistoryData", data);
    },
    clearTodos({ commit }) {
      commit("clearTodos");
    },
  },
  getters: {
    getUserData(state) {
      return state.userData;
    },
    getTodos(state) {
      return state.todos;
    },
    getHistoryData(state) {
      return state.historyData;
    },
  },
});

export default store;
