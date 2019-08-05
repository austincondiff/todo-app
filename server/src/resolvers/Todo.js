const Todo = {
  author: ({ id }, args, context) => {
    return context.prisma.todo({ id }).author()
  },
  todoList: ({ id }, args, context) => {
    return context.prisma.todo({ id }).todoList()
  }
}

module.exports = {
  Todo
}
