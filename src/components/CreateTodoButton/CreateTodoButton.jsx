import React from 'react'

import "./CreateTodoButton.scss"
const CreateTodoButton = ({modal, setModal}) => {

  const onClickButton = () => {
    setModal(!modal)
  }
  return (
    <button 
    className='CreateTodoButton'
    onClick={onClickButton}
    >
      +
    </button>
  )
}

export default CreateTodoButton