var vm = new Vue({
  el: '#app',
  data: {
    todos: [{ content: 'Banana', completed: false }],
    newTodo: '',
    todos_done: []
  },
  methods: {
    addTodo: function (todoItem) {
      this.todos.push({ content: todoItem, completed: false })
      this.newTodo = ''
    },
    removeTodo: function (todoItem) {
      this.todos.splice(this.todos.indexOf(todoItem), 1)
    },
    removeTodo_done: function (doneItem) {
      this.todos_done.splice(this.todos.indexOf(doneItem), 1)
    },
    completedTodo: function (doneItem) {
      if (doneItem.completed == false) {
        this.todos.splice(this.todos.indexOf(doneItem), 1)
        this.todos_done.push(doneItem)
        doneItem.completed = true
        console.log(doneItem.completed)
      } else {
        this.todos_done.splice(this.todos_done.indexOf(doneItem), 1)
        this.todos.push(doneItem)
        doneItem.completed = false
        console.log(doneItem.completed)
      }
    },
    uncompletedTodo: function (doneItem) {
      if (doneItem.completed == false) {
        this.todos.splice(this.todos.indexOf(doneItem), 1)
        this.todos_done.push(doneItem)
        doneItem.completed = true
        console.log(doneItem.completed)
      }
    }
  }
})
