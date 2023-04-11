import React from 'react'

import "./TodoItem.scss"

const TodoItem = (props) => {






  return (
    <li className='Todo-Item'>

      {/* CHECKMARK DE COMPLETAR */}
      <span
      onClick={props.onComplete}
      className='Checkmark'
      >
        <i class="fa-solid fa-check fa-xl"></i>
      </span>


      {/* 2 SECCION DEL TODO Y LA INFO */}
      


        <div className='Todo'>

          <p>{props.text}</p>
          
        </div>
        

        
        
        <div className='IconBox'>
            {/* FECHA */}
            <span>
              <p>12:30 4/10/23</p>
            </span>
            
            {/* CATEGORIES ICON */}
            <button className='Category-Button'>
              <i class="fa-solid fa-house"> Home</i>

            </button>

            {/* BORRAR ICON */}
            <button
            onClick={props.onDelete}
            className='Delete-Button'
            >
              <i class="fa-solid fa-trash"> Borrar</i>

            </button>   
        </div>

        

        
        

      

    </li>
  )
}

export default TodoItem