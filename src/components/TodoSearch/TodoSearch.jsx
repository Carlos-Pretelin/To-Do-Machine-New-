import React, {useContext, useState} from 'react'
import { TodoContext } from '../../context'

import "./TodoSearch.scss"

const TodoSearch = () => {


  const {searchValue, setSearchValue} = useContext(TodoContext);

  const onSearchValueChange = (e)=> {
    setSearchValue(e.target.value)
    console.log(e.target.value)
  }


  return (
    <div className='TodoSearch'>
      
      <input 
      type="text" 
      placeholder='Search for your To-do...'
      onChange={onSearchValueChange}
      />  
      {/* <h3>El estado es {searchValue}</h3> */}
    </div>
  )
}

export default TodoSearch