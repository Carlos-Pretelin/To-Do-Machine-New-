import React from 'react'

const TodoItem = (props) => {


  // const onComplete = () => {
  //   console.log(`Tu todo ${props.text} fue completado `)
  // }

  const onDelete = () => {
    console.log(`Tu todo ${props.text} fue eleminado `)
  }





  return (
    <li>
      <span
      onClick={props.onComplete}
      >C</span>
      <p>{props.text}</p>
      <span
      onClick={props.onDelete}
      >X</span>

    </li>
  )
}

export default TodoItem