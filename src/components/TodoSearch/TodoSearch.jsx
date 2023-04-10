import React, {useContext, useState} from 'react'
import { TodoContext } from '../../context'

const TodoSearch = () => {


  const {searchValue, setSearchValue} = useContext(TodoContext);

  const onSearchValueChange = (e)=> {
    setSearchValue(e.target.value)
    console.log(e.target.value)
  }


  return (
    <div>
      
      <input 
      type="text" 
      placeholder='Cebolla'
      onChange={onSearchValueChange}
      />  
      <h3>El estado es {searchValue}</h3>
    </div>
  )
}

export default TodoSearch