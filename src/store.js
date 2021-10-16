import {createStore} from 'vuex';

const store = createStore({
state: {
  todos: [
    {title: 'Купить бананы'},
    {title: 'Купить бананы'},
    {title: 'Купить бананы'}
  ]
},
  mutations: {
    setTodo(state, todoTitle) {
      state.todos.push({
        title: todoTitle
      })
    }
  },
  actions: {
    addTodo({commit}, todo) {
      commit('setTodo', todo)
    }
  },
  getters: {
    getTodos(state){
      return state.todos;
    }
  }

});
export default store;
