import React, {useContext, useState} from 'react'
import { TodoContext } from '../../context'

import "./TodoForm.scss"

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
    <form className='TodoForm' onSubmit={onSubmit}>
        {/* <label>Escribe tu nuevo To-Do</label> */}
        <textarea  
        placeholder='Escribe tu nuevo todo!'
        onChange={onModalValueChange} 
        cols="10" 
        rows="5"
        ></textarea>

        <div className='TodoForm-ButtonBox'>
            <button className='Red-Button' type='button' onClick={onCancel}>Cancelar</button>
            <button className='Red-Button' type='submit' >Añadir</button>
        </div>
    </form>
  )
}

export default TodoForm