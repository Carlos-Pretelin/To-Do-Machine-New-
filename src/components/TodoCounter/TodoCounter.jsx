import React, { useContext } from 'react'
import { TodoContext } from '../../context'

import "./TodoCounter.scss"

// const TodoCounter = ({total, completed}) => {
// alternative way to calling props   
const TodoCounter = () => {


  const {totalTodos, completedTodos} = useContext(TodoContext)
  
  return (
    <h2>Has completado {completedTodos} de {totalTodos} To-dos</h2>
  )
}

export default TodoCounter