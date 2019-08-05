const { getUserId } = require('../../utils')

const todoList = {
  async createTodoList(parent, { title }, context) {
    const userId = getUserId(context)

    return context.prisma.createTodoList({
      title,
      author: { connect: { id: userId } }
    })
  },

  async updateTodoList(parent, { id, title }, context) {
    const userId = getUserId(context)
    const todoListExists = await context.prisma.$exists.todoList({
      id,
      title,
      author: { id: userId }
    })

    if (!todoListExists) {
      throw new Error(`TodoList not found or you're not the author`)
    }

    return context.prisma.updateTodoList({
      where: { id }
    })
  },

  async deleteTodoList(parent, { id }, context) {
    const userId = getUserId(context)
    const todoListExists = await context.prisma.$exists.todoList({
      id,
      author: { id: userId }
    })

    if (!todoListExists) {
      throw new Error(`TodoList not found or you're not the author`)
    }

    return context.prisma.deleteTodoList({ id })
  }
}

module.exports = { todoList }
