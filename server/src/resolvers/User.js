const User = {
  todos: ({ id }, args, context) => {
    return context.prisma.user({ id }).todos()
  },
  todoLists: ({ id }, args, context) => {
    return context.prisma.user({ id }).todoLists()
  }
}

module.exports = {
  User
}
