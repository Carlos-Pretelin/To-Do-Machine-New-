import React, {useState} from 'react'

const TodoSearch = () => {

  const [searchValue, setSearchValue] = useState("");

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