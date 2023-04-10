import React from 'react'
//Components
import Header from '../containers/Header/Header'
import Main from '../containers/Main/Main'
import Footer from '../containers/Footer/Footer'

//scss
import "./AppUI.scss"



//So this is a component that only contains components so it more clear to read
//the downside of this method is that for large projects, i ll have to pass on a lot of props, making it a little hard to keep on with
//But in this case im using a context file to pass on the props i need

const AppUI = () => {

    

  return (
    <div className='Wrapper'>


      <Header/>
      
      <Main/>

      <Footer/>

      
    </div>
  )
}

export default AppUI