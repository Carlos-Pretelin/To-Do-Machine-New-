import React from 'react'

const CreateTodoButton = () => {

  const onClickButton = (message) => {
    console.log(message);
  }
  return (
    <button 
    className='CreateTodoButton'
    onClick={()=> onClickButton("Este es el mensaje del CreateTodoButton, Aqui deberia abrirse el modal para agregar un To-do")}
    >
      +
    </button>
  )
}

export default CreateTodoButton