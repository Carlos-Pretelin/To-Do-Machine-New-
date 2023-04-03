import React from 'react'

const TodoSearch = () => {

  const onSearchValueChange = (e)=> {

    console.log(e.target.value)
  }


  return (
    <div>

      <input 
      type="text" 
      placeholder='Cebolla'
      onChange={onSearchValueChange}
      />  

    </div>
  )
}

export default TodoSearch