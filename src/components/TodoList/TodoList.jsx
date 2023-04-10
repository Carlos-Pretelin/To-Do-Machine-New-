import React from 'react'

import "./TodoList.scss"

const TodoList = ({children}) => {
  return (
    <section className='TodoList'>
      <ul>
        {children}
      </ul>
    </section>
  )
}

export default TodoList