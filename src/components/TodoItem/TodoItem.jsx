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
        <i className="fa-solid fa-check fa-xl"></i>
      </span>


      {/* 2 SECCION DEL TODO Y LA INFO */}
      


        <div className='Todo'>

          <p>{props.text}</p>
          
        </div>


        {/* Box with the Date and the future Categories box */}
        <div className='Todo-info'>
          
         <div className='DateBox'>
          {/* FECHA */}
          <span>
              <p>12:30 4/10/23</p>
          </span>
         </div>
        
        
        <div className='IconBox'>
           
            
            {/* CATEGORIES ICON */}
            <button className='Category-Button'>
              <i className="fa-solid fa-house"></i>
              <p>Home</p>
              {}

            </button>

            {/* BORRAR ICON */}
            <button
            onClick={props.onDelete}
            className='Delete-Button'
            >
              <i className="fa-solid fa-trash"></i>
              <p>Borrar</p>

            </button>   
        </div>

        </div>
        

        
        

      

    </li>
  )
}

export default TodoItem