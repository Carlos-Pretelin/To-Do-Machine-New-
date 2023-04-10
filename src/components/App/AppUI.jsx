import React, { useContext } from 'react'

import { TodoContext } from '../../context'

//Components
import TodoCounter from "../TodoCounter/TodoCounter"
import TodoSearch from "../TodoSearch/TodoSearch"
import TodoList from "../TodoList/TodoList"
import TodoItem from "../TodoItem/TodoItem"
import CreateTodoButton from "../CreateTodoButton/CreateTodoButton"
import Modal from '../Modal/Modal'
import TodoForm from '../TodoForm/TodoForm'



//So this is a component that only contains components so it more clear to read, and the index.js file in this App folder contains all the js logic
//the downside of this method is that for large projects, i ll have to pass on a lot of props, making it a little hard to keep on with

const AppUI = () => {

    //Here im using this props from a Context file, calling it with the useContext hook, so that i can call any prop that i need
    const {
        completeTodos,
        deleteTodos,
        searchedTodos,
        error,
        loading,
        modal,
        setModal
        } = useContext(TodoContext);

  return (
    <>
      <TodoCounter
    // This props are going to be called directly from their componetns using the context file  
    //   total={totalTodos}
    //   completed={completedTodos}
      />

      <TodoSearch
    //   searchValue={searchValue}
    //   setSearchValue={setSearchValue}
      /> 
      

      <TodoList>

        {error && <p>Hubo un error...</p>}
        {loading && <p>Estamos cargando tus to-dos</p>}
        {(!loading && !searchedTodos.length) && <p>Escribe tu primer to-do</p>}


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

      {modal && (
        <Modal>
            <TodoForm setModal={setModal} />
        </Modal>
      )}

      <CreateTodoButton
      modal={modal}
      setModal={setModal}
      />
    </>
  )
}

export default AppUI