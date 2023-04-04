import React, {useState} from 'react'

//components
import TodoCounter from "./TodoCounter"
import TodoSearch from "./TodoSearch"
import TodoList from "./TodoList"
import TodoItem from "./TodoItem"
import CreateTodoButton from "./CreateTodoButton"
//scss
import "../styles/App.scss"

const App = () => {

  //Default todo list just for development purposes
  const defaultTodos = [
    {text: "Hola mundo", completed: false},
    {text: "Hola Amigo", completed: false},
    {text: "Hola a Todos mis Amigos", completed: true}
  ]

  
  //State of the To-dos
  const [todos, setTodos] = useState(defaultTodos)
  //Value of the input 
  const [searchValue, setSearchValue] = useState("");


  //TODOCOUNTER PROPERTIES
  //This filter is creating a new array with only the elements that have their completed element as true, 
  //but i wrote .length so i get the number of items that are completed
  const completedTodos = todos.filter( todo => todo.completed).length 
  //Total number of todos
  const totalTodos = todos.length;







  return (
    <>
      <TodoCounter
      total={totalTodos}
      completed={completedTodos}
      />

      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      /> 
      

      <TodoList>
        {todos.map ( todo => (
          <TodoItem todo={todo} key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  )
}

export default App