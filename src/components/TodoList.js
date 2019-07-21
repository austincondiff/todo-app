import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import Button from './Button'

const ListWrap = styled.div`
  padding: 32px;
  padding-left: 312px; // sidebar width + padding
`
const ListHeader = styled.div`
  display: flex;
  margin-bottom: 16px;
`
const ListTitleWrap = styled.div`
  flex: 1;
`
const ListActionsWrap = styled.div``
const ListTitle = styled.h1`
  margin: 0;
  color: ${props => props.theme.color.primary};
`
const TodoItems = styled.div``

class TodoList extends React.Component {
  state = { count: JSON.parse(localStorage.getItem('count')) || 0, todos: JSON.parse(localStorage.getItem('todos')) || [] }

  addTodo = () => {
    this.setState(
      {
        count: this.state.count + 1,
        todos: [...this.state.todos, { id: this.state.count, text: '', done: false }]
      },
      () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
        localStorage.setItem('count', this.state.count)
        console.log(this.state.todos)
      }
    )
  }

  handleTextChange = (id, text) => {
    console.log(`Changing text on item #${id} to ${text}.`)

    this.setState(
      {
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, text }
          }
          return todo
        })
      },
      () => {
        console.log(this.state.todos)
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
      }
    )
  }

  handleStatusChange = (id, done) => {
    this.setState(
      {
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            console.log(`Changing status on item #${id} to ${!todo.done ? 'complete' : 'incomplete'}.`)
            return { ...todo, done }
          }
          return todo
        })
      },
      () => {
        console.log(this.state.todos)
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
      }
    )
  }

  handleDelete = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) }, () => {
      console.log(`Delete item #${id}`)
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.addTodo()
    }
  }

  render() {
    console.log(this.state.todos)
    return (
      <ListWrap>
        <ListHeader>
          <ListTitleWrap>
            <ListTitle>To Do Items</ListTitle>
          </ListTitleWrap>
          <ListActionsWrap>
            <Button primary onClick={() => this.addTodo()}>
              Add Todo
            </Button>
          </ListActionsWrap>
        </ListHeader>
        <TodoItems>
          {this.state.todos.map(todo => (
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
        </TodoItems>
      </ListWrap>
    )
  }
}

export default TodoList
