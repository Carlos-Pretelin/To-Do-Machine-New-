import React from 'react'

//components
import TodoCounter from "./TodoCounter"
import TodoSearch from "./TodoSearch"
import TodoList from "./TodoList"
import TodoItem from "./TodoItem"
import CreateTodoButton from "./CreateTodoButton"
//scss
import "../styles/App.scss"

const App = () => {

  const todos = [
    {text: "Hola mundo", completed: false},
    {text: "Hola Amigo", completed: false},
    {text: "Hola a Todos", completed: false}
  ]





  return (
    <>
      <TodoCounter/>

      <TodoSearch/> 
      <input type="text" placeholder='Cebolla'/>

      <TodoList>
        {todos.map ( todo => (
          <TodoItem todo={todo} key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
      <button>+</button>
    </>
  )
}

export default App