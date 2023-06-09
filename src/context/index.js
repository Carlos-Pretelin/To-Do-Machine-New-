import React,{useState} from "react";

import useLocalStorage from "../hooks/useLocalStorage";


 const TodoContext = React.createContext();

 function TodoProvider (props) {

    
  
  //State of the To-dos
  //Here i getting the todos from my custom hook so i know if i have todos in the local storage, by default theres nothing so i send an initalValue as an []
  //Then im getting the saveItem function that updates my todo list, its the updater i use in the onComplete and onDelete buttons, so that way i can store
  //the changes to the localStorage
  const {
    Item: todos,
    saveItem,
    loading,
    error
    } = useLocalStorage("TODOS_V1", []);
  //Value of the input 
  const [searchValue, setSearchValue] = useState("");

  const [modal, setModal] = useState(false);


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

    //setTodos(newTodos)
    //Here i replaced the setTodos with a new function, saveTodos, so i can persist information in localStorage, it does the same thing, it just updates
    //the todos that are deleted and completed, but also stringifies them so i can send them to the localStorage
    saveItem(newTodos)
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
    //Here i replaced the setTodos with a new function, saveItem, so i can persist information in localStorage, it does the same thing, it just updates
    //the todos that are deleted and completed, but also stringifies them so i can send them to the localStorage
    saveItem(newTodos)
    console.log(newTodos)
    console.log("Se cambio el estado, borre el todo")
  }


  const addTodos = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      text: text,
      completed: false
    })
    saveItem(newTodos)
    console.log("Se añadio el todo")
    console.log(newTodos)

  }

    return (
        <TodoContext.Provider value={
    {totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos,
    loading,
    error,
    modal,
    setModal,
    addTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    );
 }

 export {TodoContext, TodoProvider}