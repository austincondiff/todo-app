const { getUserId } = require('../utils')

const Query = {
  todos(parent, args, context) {
    return context.prisma.todos()
  },
  todo(parent, { id }, context) {
    return context.prisma.todo({ id })
  },
  todoLists(parent, args, context) {
    return context.prisma.todoLists()
  },
  todoList(parent, { id }, context) {
    return context.prisma.todoList({ id })
  },
  me(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({ id })
  }
}

module.exports = { Query }
