const { getUserId } = require('../../utils')

const todo = {
  async createTodo(parent, { todoListId, title }, context) {
    const userId = getUserId(context)

    return context.prisma.createTodo({
      title,
      complete: false,
      todoList: { connect: { id: todoListId } },
      author: { connect: { id: userId } }
    })
  },

  async updateTodo(parent, { id, title, complete, todoList }, context) {
    const userId = getUserId(context)
    const todoExists = await context.prisma.$exists.todo({
      id,
      title,
      complete,
      todoList: { id: todoList.id },
      author: { id: userId }
    })

    if (!todoExists) {
      throw new Error(`Todo not found or you're not the author`)
    }

    return context.prisma.updateTodo({
      where: { id }
    })
  },

  async deleteTodo(parent, { id }, context) {
    const userId = getUserId(context)
    const todoExists = await context.prisma.$exists.todo({
      id,
      author: { id: userId }
    })

    if (!todoExists) {
      throw new Error(`Todo not found or you're not the author`)
    }

    return context.prisma.deleteTodo({ id })
  }
}

module.exports = { todo }
