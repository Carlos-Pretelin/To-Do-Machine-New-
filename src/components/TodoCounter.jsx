import React from 'react'

// const TodoCounter = ({total, completed}) => {
// alternative way to calling props   
const TodoCounter = (props) => {
  return (
    <h2>Has completado {props.completed} de {props.total} To-dos</h2>
  )
}

export default TodoCounter