import React, {useContext} from 'react'
//Components
import TodoList from "../../TodoList/TodoList"
import TodoItem from "../../TodoItem/TodoItem"
import CreateTodoButton from "../../CreateTodoButton/CreateTodoButton"
import Modal from '../../Modal/Modal'
import TodoForm from '../../TodoForm/TodoForm'
//Context
import { TodoContext } from '../../../context'
//css
import "./Main.scss"


const Main = () => {

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
    <main className='center'>
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


    </main>
  )
}

export default Main