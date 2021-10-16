<template>
  <div class="cont">
    <div class="new">
      <input
      type="text"
      id="new-todo"
      placeholder="Введите текст"
      v-model="newTodoInput"
      @keydown.enter="addTodo(newTodoInput);">
      <button class="btn"
              @click="addTodo(newTodoInput)">
        Добавить
      </button>
    </div>
    <ul class="todos-list">
      <li class="todo-item" v-for="todo in todos" :key="todo.id">
        <span class="todo-content">
          {{ todo.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from './store';
export default {
  name: "New",
  data() {
    return {
      newTodoInput: "",
    }
  },
  methods: {
    addTodo(todo) {
      store.dispatch('addTodo', todo)
    }
  },
  computed: {
    ...mapGetters({todos:'getTodos'})
  }
}
</script>

<style>
.cont {
  margin: auto;
}
.todo-item {
  list-style: none;
}
</style>
