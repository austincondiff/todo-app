import React from 'react'
import TodoList from './TodoList'
import Sidebar from './Sidebar'
import GlobalStyles from './GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme'

class App extends React.Component {
  state = {
    darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
    listCount: JSON.parse(localStorage.getItem('listCount')) || 0,
    todoLists: JSON.parse(localStorage.getItem('todoLists')) || [],
    activeTodoListId: JSON.parse(localStorage.getItem('activeTodoListId')) || 0
  }

  handleAddTodoList = () => {
    this.setState(
      {
        listCount: this.state.listCount + 1,
        todoLists: [...this.state.todoLists, { id: this.state.listCount, name: 'To do list', todos: [] }]
      },
      () => {
        localStorage.setItem('todoLists', JSON.stringify(this.state.todoLists))
        localStorage.setItem('listCount', this.state.listCount)
        console.log(this.state.todoLists)
      }
    )
  }

  handleListChange = activeTodoListId =>
    this.setState({ activeTodoListId }, () => localStorage.setItem('activeTodoListId', activeTodoListId))

  updateTodoListTodos = (id, todos) => {
    this.setState(
      {
        todoLists: this.state.todoLists.map(list => {
          if (list.id === id) {
            console.log(`Updating todo list #${id}.`, list)
            return { ...list, todos }
          }

          return list
        })
      },
      () => localStorage.setItem('todoLists', JSON.stringify(this.state.todoLists))
    )
  }

  updateTodoListName = (id, name) => {
    this.setState(
      {
        todoLists: this.state.todoLists.map(list => {
          if (list.id === id) {
            console.log(`Updating todo list #${id}.`, name)
            return { ...list, name }
          }

          return list
        })
      },
      () => localStorage.setItem('todoLists', JSON.stringify(this.state.todoLists))
    )
  }

  handleDeleteTodoList = id => {
    this.setState(
      {
        todoLists: this.state.todoLists.filter(list => list.id !== id),
        activeTodoListId:
          this.state.activeTodoListId === id
            ? this.state.todoLists[0].id === id
              ? this.state.todoLists[1].id
              : this.state.todoLists[0].id
            : this.state.activeTodoListId
      },
      () => {
        localStorage.setItem('todoLists', JSON.stringify(this.state.todoLists))
      }
    )
  }

  render() {
    const { darkMode, todoLists, activeTodoListId } = this.state

    console.log(activeTodoListId, todoLists)

    return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <div>
          <GlobalStyles />
          <Sidebar
            onModeChange={() => {
              this.setState({ darkMode: !darkMode })
              localStorage.setItem('darkMode', JSON.stringify(!darkMode))
            }}
            onListChange={this.handleListChange}
            onAddTodoList={this.handleAddTodoList}
            onDeleteTodoList={this.handleDeleteTodoList}
            todoLists={todoLists}
            darkMode={darkMode}
            activeTodoListId={activeTodoListId}
          />
          {todoLists && todoLists.length && (
            <TodoList
              updateTodoListTodos={this.updateTodoListTodos}
              updateTodoListName={this.updateTodoListName}
              todoList={todoLists.find(todoList => todoList.id === activeTodoListId)}
            />
          )}
        </div>
      </ThemeProvider>
    )
  }
}

export default App
