import React, {useState} from 'react'

//components
import AppUI from './AppUI'
//scss
import "./App.scss"


const App = () => {

  //Default todo list just for development purposes
  const defaultTodos = [
    {text: "Hola mundo", completed: false},
    {text: "Hola Amigo", completed: false},
    {text: "Hola a Todos mis Amigos", completed: true}
  ]




  //LOCAL STORAGE

  //This constant gets me whatever im storing in the local storage of the browser in this case im asking for the TODOS_V1 object
  const localStorageTodos = localStorage.getItem(`TODOS_V1`);

  let parsedTodos;

  //So if localstorage has something in it that means parsedTodos will be equal to that parsed info
  //But if its empty i will say that parsed todos is only an empty array and set the localStorage to a string with an array inside "[]" like this so that the user can create their first todo
  if(!localStorageTodos){
    localStorage.setItem("TODOS_V1", JSON.stringify([]))
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }










  
  //State of the To-dos
  const [todos, setTodos] = useState(parsedTodos)
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



  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos),

    setTodos(newTodos)
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

    //setTodos(newTodos)
    //Here i replaced the setTodos with a new function, saveTodos, so i can persist information in localStorage, it does the same thing, it just updates
    //the todos that are deleted and completed, but also stringifies them so i can send them to the localStorage
    saveTodos(newTodos)
    console.log(newTodos)
    console.log("Se cambio el estado")
  }

  //So this is the function to delete todos, is similar to the one for deleting todos
  //here i get the index or position of the todo i want to delete and in the newtodos array i make a splice method stating that in the postion of my index
  //i want to delete 1 element or in other words 1 position after the starting point of the first argument
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1)
    
    //setTodos(newTodos)
    //Here i replaced the setTodos with a new function, saveTodos, so i can persist information in localStorage, it does the same thing, it just updates
    //the todos that are deleted and completed, but also stringifies them so i can send them to the localStorage
    saveTodos(newTodos)
    console.log(newTodos)
    console.log("Se cambio el estado, borre el todo")
  }




  return (
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodos={completeTodos}
    deleteTodos={deleteTodos}
    />
  )
}

export default App;