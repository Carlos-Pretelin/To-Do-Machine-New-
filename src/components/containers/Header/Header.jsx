import React from 'react'
import TodoCounter from '../../TodoCounter/TodoCounter'
import TodoSearch from '../../TodoSearch/TodoSearch'

import "./Header.scss"

const Header = () => {
  return (
    <header className='center'>
        <h1>To-Go </h1>
        <TodoCounter/>
        <TodoSearch/>
    </header>
  )
}

export default Header