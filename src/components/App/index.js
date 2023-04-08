import React, {useState} from 'react'
import { TodoProvider } from '../../context'
//components
import AppUI from './AppUI'
//scss
import "./App.scss"


const App = () => {

  //Default todo list just for development purposes
  // const defaultTodos = [
  //   {text: "Hola mundo", completed: false},
  //   {text: "Hola Amigo", completed: false},
  //   {text: "Hola como, como estas shawty", completed: false},
  //   {text: "Yo sup man", completed: false},
  //   {text: "Este To-do es True", completed: true}
  // ]


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  )
}

export default App;