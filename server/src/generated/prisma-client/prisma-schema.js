module.exports = {
        typeDefs: /* GraphQL */ `type AggregateTodo {
  count: Int!
}

type AggregateTodoList {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createTodo(data: TodoCreateInput!): Todo!
  updateTodo(data: TodoUpdateInput!, where: TodoWhereUniqueInput!): Todo
  updateManyTodoes(data: TodoUpdateManyMutationInput!, where: TodoWhereInput): BatchPayload!
  upsertTodo(where: TodoWhereUniqueInput!, create: TodoCreateInput!, update: TodoUpdateInput!): Todo!
  deleteTodo(where: TodoWhereUniqueInput!): Todo
  deleteManyTodoes(where: TodoWhereInput): BatchPayload!
  createTodoList(data: TodoListCreateInput!): TodoList!
  updateTodoList(data: TodoListUpdateInput!, where: TodoListWhereUniqueInput!): TodoList
  updateManyTodoLists(data: TodoListUpdateManyMutationInput!, where: TodoListWhereInput): BatchPayload!
  upsertTodoList(where: TodoListWhereUniqueInput!, create: TodoListCreateInput!, update: TodoListUpdateInput!): TodoList!
  deleteTodoList(where: TodoListWhereUniqueInput!): TodoList
  deleteManyTodoLists(where: TodoListWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  todo(where: TodoWhereUniqueInput!): Todo
  todoes(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo]!
  todoesConnection(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoConnection!
  todoList(where: TodoListWhereUniqueInput!): TodoList
  todoLists(where: TodoListWhereInput, orderBy: TodoListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TodoList]!
  todoListsConnection(where: TodoListWhereInput, orderBy: TodoListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoListConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  todo(where: TodoSubscriptionWhereInput): TodoSubscriptionPayload
  todoList(where: TodoListSubscriptionWhereInput): TodoListSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Todo {
  id: ID!
  title: String
  complete: Boolean!
  author: User!
  todoList: TodoList!
}

type TodoConnection {
  pageInfo: PageInfo!
  edges: [TodoEdge]!
  aggregate: AggregateTodo!
}

input TodoCreateInput {
  title: String
  complete: Boolean!
  author: UserCreateOneWithoutTodosInput!
  todoList: TodoListCreateOneWithoutTodosInput!
}

input TodoCreateManyWithoutAuthorInput {
  create: [TodoCreateWithoutAuthorInput!]
  connect: [TodoWhereUniqueInput!]
}

input TodoCreateManyWithoutTodoListInput {
  create: [TodoCreateWithoutTodoListInput!]
  connect: [TodoWhereUniqueInput!]
}

input TodoCreateWithoutAuthorInput {
  title: String
  complete: Boolean!
  todoList: TodoListCreateOneWithoutTodosInput!
}

input TodoCreateWithoutTodoListInput {
  title: String
  complete: Boolean!
  author: UserCreateOneWithoutTodosInput!
}

type TodoEdge {
  node: Todo!
  cursor: String!
}

type TodoList {
  id: ID!
  title: String
  author: User!
  todos(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo!]
}

type TodoListConnection {
  pageInfo: PageInfo!
  edges: [TodoListEdge]!
  aggregate: AggregateTodoList!
}

input TodoListCreateInput {
  title: String
  author: UserCreateOneWithoutTodoListsInput!
  todos: TodoCreateManyWithoutTodoListInput
}

input TodoListCreateManyWithoutAuthorInput {
  create: [TodoListCreateWithoutAuthorInput!]
  connect: [TodoListWhereUniqueInput!]
}

input TodoListCreateOneWithoutTodosInput {
  create: TodoListCreateWithoutTodosInput
  connect: TodoListWhereUniqueInput
}

input TodoListCreateWithoutAuthorInput {
  title: String
  todos: TodoCreateManyWithoutTodoListInput
}

input TodoListCreateWithoutTodosInput {
  title: String
  author: UserCreateOneWithoutTodoListsInput!
}

type TodoListEdge {
  node: TodoList!
  cursor: String!
}

enum TodoListOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TodoListPreviousValues {
  id: ID!
  title: String
}

input TodoListScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [TodoListScalarWhereInput!]
  OR: [TodoListScalarWhereInput!]
  NOT: [TodoListScalarWhereInput!]
}

type TodoListSubscriptionPayload {
  mutation: MutationType!
  node: TodoList
  updatedFields: [String!]
  previousValues: TodoListPreviousValues
}

input TodoListSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoListWhereInput
  AND: [TodoListSubscriptionWhereInput!]
  OR: [TodoListSubscriptionWhereInput!]
  NOT: [TodoListSubscriptionWhereInput!]
}

input TodoListUpdateInput {
  title: String
  author: UserUpdateOneRequiredWithoutTodoListsInput
  todos: TodoUpdateManyWithoutTodoListInput
}

input TodoListUpdateManyDataInput {
  title: String
}

input TodoListUpdateManyMutationInput {
  title: String
}

input TodoListUpdateManyWithoutAuthorInput {
  create: [TodoListCreateWithoutAuthorInput!]
  delete: [TodoListWhereUniqueInput!]
  connect: [TodoListWhereUniqueInput!]
  disconnect: [TodoListWhereUniqueInput!]
  update: [TodoListUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TodoListUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [TodoListScalarWhereInput!]
  updateMany: [TodoListUpdateManyWithWhereNestedInput!]
}

input TodoListUpdateManyWithWhereNestedInput {
  where: TodoListScalarWhereInput!
  data: TodoListUpdateManyDataInput!
}

input TodoListUpdateOneRequiredWithoutTodosInput {
  create: TodoListCreateWithoutTodosInput
  update: TodoListUpdateWithoutTodosDataInput
  upsert: TodoListUpsertWithoutTodosInput
  connect: TodoListWhereUniqueInput
}

input TodoListUpdateWithoutAuthorDataInput {
  title: String
  todos: TodoUpdateManyWithoutTodoListInput
}

input TodoListUpdateWithoutTodosDataInput {
  title: String
  author: UserUpdateOneRequiredWithoutTodoListsInput
}

input TodoListUpdateWithWhereUniqueWithoutAuthorInput {
  where: TodoListWhereUniqueInput!
  data: TodoListUpdateWithoutAuthorDataInput!
}

input TodoListUpsertWithoutTodosInput {
  update: TodoListUpdateWithoutTodosDataInput!
  create: TodoListCreateWithoutTodosInput!
}

input TodoListUpsertWithWhereUniqueWithoutAuthorInput {
  where: TodoListWhereUniqueInput!
  update: TodoListUpdateWithoutAuthorDataInput!
  create: TodoListCreateWithoutAuthorInput!
}

input TodoListWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  author: UserWhereInput
  todos_every: TodoWhereInput
  todos_some: TodoWhereInput
  todos_none: TodoWhereInput
  AND: [TodoListWhereInput!]
  OR: [TodoListWhereInput!]
  NOT: [TodoListWhereInput!]
}

input TodoListWhereUniqueInput {
  id: ID
}

enum TodoOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  complete_ASC
  complete_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TodoPreviousValues {
  id: ID!
  title: String
  complete: Boolean!
}

input TodoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  complete: Boolean
  complete_not: Boolean
  AND: [TodoScalarWhereInput!]
  OR: [TodoScalarWhereInput!]
  NOT: [TodoScalarWhereInput!]
}

type TodoSubscriptionPayload {
  mutation: MutationType!
  node: Todo
  updatedFields: [String!]
  previousValues: TodoPreviousValues
}

input TodoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoWhereInput
  AND: [TodoSubscriptionWhereInput!]
  OR: [TodoSubscriptionWhereInput!]
  NOT: [TodoSubscriptionWhereInput!]
}

input TodoUpdateInput {
  title: String
  complete: Boolean
  author: UserUpdateOneRequiredWithoutTodosInput
  todoList: TodoListUpdateOneRequiredWithoutTodosInput
}

input TodoUpdateManyDataInput {
  title: String
  complete: Boolean
}

input TodoUpdateManyMutationInput {
  title: String
  complete: Boolean
}

input TodoUpdateManyWithoutAuthorInput {
  create: [TodoCreateWithoutAuthorInput!]
  delete: [TodoWhereUniqueInput!]
  connect: [TodoWhereUniqueInput!]
  disconnect: [TodoWhereUniqueInput!]
  update: [TodoUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TodoUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [TodoScalarWhereInput!]
  updateMany: [TodoUpdateManyWithWhereNestedInput!]
}

input TodoUpdateManyWithoutTodoListInput {
  create: [TodoCreateWithoutTodoListInput!]
  delete: [TodoWhereUniqueInput!]
  connect: [TodoWhereUniqueInput!]
  disconnect: [TodoWhereUniqueInput!]
  update: [TodoUpdateWithWhereUniqueWithoutTodoListInput!]
  upsert: [TodoUpsertWithWhereUniqueWithoutTodoListInput!]
  deleteMany: [TodoScalarWhereInput!]
  updateMany: [TodoUpdateManyWithWhereNestedInput!]
}

input TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput!
  data: TodoUpdateManyDataInput!
}

input TodoUpdateWithoutAuthorDataInput {
  title: String
  complete: Boolean
  todoList: TodoListUpdateOneRequiredWithoutTodosInput
}

input TodoUpdateWithoutTodoListDataInput {
  title: String
  complete: Boolean
  author: UserUpdateOneRequiredWithoutTodosInput
}

input TodoUpdateWithWhereUniqueWithoutAuthorInput {
  where: TodoWhereUniqueInput!
  data: TodoUpdateWithoutAuthorDataInput!
}

input TodoUpdateWithWhereUniqueWithoutTodoListInput {
  where: TodoWhereUniqueInput!
  data: TodoUpdateWithoutTodoListDataInput!
}

input TodoUpsertWithWhereUniqueWithoutAuthorInput {
  where: TodoWhereUniqueInput!
  update: TodoUpdateWithoutAuthorDataInput!
  create: TodoCreateWithoutAuthorInput!
}

input TodoUpsertWithWhereUniqueWithoutTodoListInput {
  where: TodoWhereUniqueInput!
  update: TodoUpdateWithoutTodoListDataInput!
  create: TodoCreateWithoutTodoListInput!
}

input TodoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  complete: Boolean
  complete_not: Boolean
  author: UserWhereInput
  todoList: TodoListWhereInput
  AND: [TodoWhereInput!]
  OR: [TodoWhereInput!]
  NOT: [TodoWhereInput!]
}

input TodoWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  todos(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo!]
  todoLists(where: TodoListWhereInput, orderBy: TodoListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TodoList!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  todos: TodoCreateManyWithoutAuthorInput
  todoLists: TodoListCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutTodoListsInput {
  create: UserCreateWithoutTodoListsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTodoListsInput {
  email: String!
  password: String!
  name: String!
  todos: TodoCreateManyWithoutAuthorInput
}

input UserCreateWithoutTodosInput {
  email: String!
  password: String!
  name: String!
  todoLists: TodoListCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  todos: TodoUpdateManyWithoutAuthorInput
  todoLists: TodoListUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredWithoutTodoListsInput {
  create: UserCreateWithoutTodoListsInput
  update: UserUpdateWithoutTodoListsDataInput
  upsert: UserUpsertWithoutTodoListsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  update: UserUpdateWithoutTodosDataInput
  upsert: UserUpsertWithoutTodosInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTodoListsDataInput {
  email: String
  password: String
  name: String
  todos: TodoUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutTodosDataInput {
  email: String
  password: String
  name: String
  todoLists: TodoListUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutTodoListsInput {
  update: UserUpdateWithoutTodoListsDataInput!
  create: UserCreateWithoutTodoListsInput!
}

input UserUpsertWithoutTodosInput {
  update: UserUpdateWithoutTodosDataInput!
  create: UserCreateWithoutTodosInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  todos_every: TodoWhereInput
  todos_some: TodoWhereInput
  todos_none: TodoWhereInput
  todoLists_every: TodoListWhereInput
  todoLists_some: TodoListWhereInput
  todoLists_none: TodoListWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    