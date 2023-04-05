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
  //This is the array of todos where im going to store the todos that includes the value of whatever the user writes in the input, by dafault is empty
  let searchedTodos = []

  //So when i put the ! sign im telling the validation that if the statement is false you may proceed with the execution, if its true go to the else
  //Basically reversing the deafult behavior, and if i put a second !, is going to cancel the second one, just like in math, 2 negatives makes a possitive
  //In short if the searchValue is more than 0 that means the user wrote something so by dafualt the value is an empty array so this will be false but the validation wont go to the else block, cause i put a ! sing first
  if(!searchValue >=1){
    searchedTodos = todos;
  } else {
    //So here im making a filter that makes searchTodos a new array from todos
    //Filtering the elements that are true
    //Here i make both the text of the todo and the input to lower case, so i can compare them using .includes
    //That way i can just make the new array of todos that includes the search that the user wrote
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText)
    })
  }



  //ok so in this function im changing the completed value to true,
  //so first i need to fin the index or in other words the position of the todo or item i want to change so i can play with it 
  const completeTodos = (text) => {

    //todoIndex is the position of the todo
    const todoIndex = todos.findIndex( todo => todo.text === text);
    //newTodos is a new array that holds everything that "todos" has inside it 
    const newTodos = [...todos];
    //Here im changing the completed value of the element in the NewTodos array, in the position "todoIndex"
    newTodos[todoIndex].completed = true;

    //ALTERNATIVE WAY OF CHANGING THE VALUE

    // newTodos[todoIndex] = {
    //   text: newTodos[todoIndex].text,
    //   completed: true
    // }

    //Here i just use the updater of the todos state to put the changed todo on screen
    setTodos(newTodos)
    
    console.log(newTodos)
    console.log("Se cambio el estado")
  }





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
        {searchedTodos.map ( todo => (
          <TodoItem 
          todo={todo} 
          key={todo.text} 
          text={todo.text} 
          onComplete={()=> completeTodos(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  )
}

export default App;