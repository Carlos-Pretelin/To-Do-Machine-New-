import React from 'react'

//Components
import TodoCounter from "../TodoCounter"
import TodoSearch from "../TodoSearch"
import TodoList from "../TodoList"
import TodoItem from "../TodoItem"
import CreateTodoButton from "../CreateTodoButton"


//So this is a component that only contains components so it more clear to read, and the index.js file in this App folder contains all the js logic
//the downside of this method is that for large projects, i ll have to pass on a lot of props, making it a little hard to keep on with

const AppUI = ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodos
    
    }) => {


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
          onDelete={()=> deleteTodos(todo.text)}
          
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  )
}

export default AppUI