import React from 'react'

import "./TodoItem.scss"

const TodoItem = (props) => {






  return (
    <li className='Todo-Item'>

      {/* CHECKMARK DE COMPLETAR */}
      <span
      onClick={props.onComplete}
      >
        <i className="fa-solid fa-check"></i>

      </span>


      {/* 2 SECCION DEL TODO Y LA INFO */}
      <div className='Todo-Info'>


        <div className='Todo'>

          <p>{props.text}</p>
          
        </div>
        

        
        
        <div className='IconBox'>
            {/* FECHA */}
            <span>
              <p>Date</p>
            </span>
            
            {/* CATEGORIES ICON */}
            <span>
              <i class="fa-solid fa-house"></i>
            </span>

            {/* BORRAR ICON */}
            <span
            onClick={props.onDelete}
            >
              <i class="fa-solid fa-trash"></i>

            </span>   
        </div>

        

        
        

      </div>

    </li>
  )
}

export default TodoItem