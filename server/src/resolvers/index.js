const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { todo } = require('./Mutation/todo')
const { todoList } = require('./Mutation/todoList')
const { Subscription } = require('./Subscription')
const { User } = require('./User')
const { Todo } = require('./Todo')
const { TodoList } = require('./TodoList')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...todo,
    ...todoList
  },
  Subscription,
  User,
  Todo,
  TodoList
}
