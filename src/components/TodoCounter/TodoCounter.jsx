import React, { useContext } from 'react'
import { TodoContext } from '../../context'

import "./TodoCounter.scss"

// const TodoCounter = ({total, completed}) => {
// alternative way to calling props   
const TodoCounter = () => {


  const {totalTodos, completedTodos} = useContext(TodoContext)
  
  return (
    <div className='TodoCounter'>
        <h3>Has completado {completedTodos} de {totalTodos} To-dos</h3>
    </div>
    
  )
}

export default TodoCounter