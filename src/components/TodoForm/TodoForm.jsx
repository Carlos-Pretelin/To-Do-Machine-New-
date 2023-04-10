import React, {useContext, useState} from 'react'
import { TodoContext } from '../../context'

const TodoForm = ({setModal}) => {



    const {addTodos} = useContext(TodoContext);

    const [modalValue, setModalValue] = useState("")



    const onModalValueChange = (e) => {
        setModalValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodos(modalValue)
        setModal(false)
        //console.log("Añadir")
    }

    const onCancel = () => {
        setModal(false)
        console.log("Cancelar")
    }

    // const onAdd = () => {
       
        
        
    // }
  return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo To-Do</label>
        <textarea  
        placeholder='Cortar Cebolla'
        onChange={onModalValueChange} 
        cols="10" 
        rows="5"
        ></textarea>

        <div>
            <button type='button' onClick={onCancel}>Cancelar</button>
            <button type='submit' >Añadir</button>
        </div>
    </form>
  )
}

export default TodoForm