import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import Button from './Button'

const ListWrap = styled.div`
  padding: 32px;
  padding-left: 312px; // sidebar width + padding
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const ListHeader = styled.div`
  display: flex;
  margin-bottom: 16px;
`
const ListTitleWrap = styled.div`
  flex: 1;
`
const ListActionsWrap = styled.div`
  padding-left: 16px;
`
const ListTitle = styled.h1`
  margin: 0;
  margin-bottom: 8px;
  color: ${props => props.theme.color.primary};
`
const ListTitleInput = styled.input.attrs({ type: 'text' })`
  margin: 0;
  padding: 8px;
  color: ${props => props.theme.color.primary};
  background-color: ${props => props.theme.alternateBackgroundColor};
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 32px;
  font-weight: 700;
  width: 100%;
  margin-left: -8px;
  margin-top: -8px;
`
const TodoItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const ButtonGroup = styled.div`
  margin: 0 -4px;
  & ${Button} {
    margin: 0 4px;
  }
`
const EmptyAddNew = styled.div`
  flex: 1;
  cursor: text;
`

class TodoList extends React.Component {
  state = { edit: false, count: JSON.parse(localStorage.getItem('count')) || 0 }

  componentDidUpdate(prevProps) {
    if (this.props.todoList.id !== prevProps.todoList.id && this.state.edit) {
      this.setState({ edit: false })
    }
  }

  addTodo = () => {
    console.log('Adding todo')
    const todos = [...this.props.todoList.todos, { id: this.state.count, text: '', done: false }]

    this.props.updateTodoListTodos(this.props.todoList.id, todos)
    this.setState({ count: this.state.count + 1 }, () => localStorage.setItem('count', this.state.count))
  }

  handleTextChange = (id, text) => {
    console.log(`Changing text on item #${id} to ${text}.`)
    const todos = this.props.todoList.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text }
      }
      return todo
    })

    this.props.updateTodoListTodos(this.props.todoList.id, todos)
  }

  handleStatusChange = (id, done) => {
    const todos = this.props.todoList.todos.map(todo => {
      if (todo.id === id) {
        console.log(`Changing status on item #${id} to ${!todo.done ? 'complete' : 'incomplete'}.`)
        return { ...todo, done }
      }

      return todo
    })

    this.props.updateTodoListTodos(this.props.todoList.id, todos)
  }

  handleDelete = id => {
    const todos = this.props.todoList.todos.filter(todo => todo.id !== id)

    this.props.updateTodoListTodos(this.props.todoList.id, todos)
    console.log(`Delete item #${id}`)
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.addTodo()
    }
  }

  handleEdit = () => {
    this.setState({ edit: true, listName: this.props.todoList.name })
  }

  handleSave = () => {
    this.props.updateTodoListName(this.props.todoList.id, this.state.listName)
    this.setState({ edit: false })
  }

  updateListName = e => {
    this.setState({ listName: e.target.value })
  }

  render() {
    console.log(this.state.todos)
    const { edit } = this.state

    return (
      <ListWrap>
        <ListHeader>
          <ListTitleWrap>
            {edit ? (
              <ListTitleInput autoFocus value={this.state.listName} onChange={this.updateListName} />
            ) : (
              <ListTitle>{this.props.todoList.name}</ListTitle>
            )}
          </ListTitleWrap>
          <ListActionsWrap>
            <ButtonGroup>
              <Button onClick={edit ? this.handleSave : this.handleEdit}>{edit ? 'Save' : 'Edit'}</Button>
              <Button primary onClick={this.addTodo}>
                Add Todo
              </Button>
            </ButtonGroup>
          </ListActionsWrap>
        </ListHeader>
        <TodoItems>
          {this.props.todoList.todos.map(todo => (
            <TodoItem
              key={todo.id}
              done={todo.done}
              text={todo.text}
              onTextChange={val => this.handleTextChange(todo.id, val)}
              onStatusChange={val => this.handleStatusChange(todo.id, val)}
              onDelete={val => this.handleDelete(todo.id)}
              addNewItem={this.addTodo}
            />
          ))}
          <EmptyAddNew onClick={this.addTodo} />
        </TodoItems>
      </ListWrap>
    )
  }
}

export default TodoList
