const TodoList = {
  todos: ({ id }, args, context) => {
    return context.prisma.todoList({ id }).todos()
  },
  author: ({ id }, args, context) => {
    return context.prisma.todoList({ id }).author()
  }
}

module.exports = {
  TodoList
}
