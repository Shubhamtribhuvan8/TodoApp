// // store.js
// import { createStore } from "vuex";

// const store = createStore({
//   state: {
//     userData: {
//       userName: "",
//       email: "",
//       password: "",
//     },
//     todos: [],
//     historyData: [],
//   },
//   mutations: {
//     setUserData(state, userData) {
//       state.userData = userData;
//     },
//     addTodo(state, todo) {
//       state.todos.push(todo);
//     },
//     deleteTodo(state, index) {
//       state.todos.splice(index, 1);
//     },
//     addToHistoryData(state, data) {
//       state.historyData.push(data);
//     },
//     clearTodos(state) {
//       state.todos = [];
//     },
//     // New mutation to initialize the store state from localStorage
//     initializeStore(state) {
//       if (localStorage.getItem("store")) {
//         const storedData = JSON.parse(localStorage.getItem("store"));
//         this.replaceState(Object.assign(state, storedData));
//       }
//     },
//   },
//   actions: {
//     setUserData({ commit }, userData) {
//       commit("setUserData", userData);
//     },
//     addTodo({ commit }, todo) {
//       commit("addTodo", todo);
//     },
//     deleteTodo({ commit }, index) {
//       commit("deleteTodo", index);
//     },
//     addToHistoryData({ commit }, data) {
//       commit("addToHistoryData", data);
//     },
//     clearTodos({ commit }) {
//       commit("clearTodos");
//     },
//   },
//   getters: {
//     getUserData(state) {
//       return state.userData;
//     },
//     getTodos(state) {
//       return state.todos;
//     },
//     getHistoryData(state) {
//       return state.historyData;
//     },
//   },
// });

// // Add an event listener to initialize the store state when the app is loaded
// window.addEventListener("load", () => {
//   store.commit("initializeStore");
// });

// // Add a listener to store the state in localStorage whenever a mutation is committed
// store.subscribe((mutation, state) => {
//   localStorage.setItem("store", JSON.stringify(state));
// });

// export default store;
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

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
  plugins: [createPersistedState()],
});

export default store;
