import React from 'react'

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