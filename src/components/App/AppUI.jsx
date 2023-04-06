import React from 'react'

//Components
import TodoCounter from "../TodoCounter"
import TodoSearch from "../TodoSearch"
import TodoList from "../TodoList"
import TodoItem from "../TodoItem"
import CreateTodoButton from "../CreateTodoButton"

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