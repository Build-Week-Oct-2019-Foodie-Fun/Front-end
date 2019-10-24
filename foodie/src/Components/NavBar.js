import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import "../allstyles.css"


function NavBar(props) {

  const logout = evt => {
    evt.preventDefault()

    localStorage.removeItem('token')
    props.history.push('/login')
  }

  return (
    <div className='navBar'>
    
    <div >
       <p className='foodieFun'>Foodie-Fun</p>
    </div> 
    
    <form className="input">
      <label>
        <input  type="text" name="name" placeholder="Search for restaurants or meals"/>
      </label>
      <button  type="submit" value="" >SEARCH</button>
    </form>
    
    <section className='navBarLinks'>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add Meal</Link>
        <button className='logoutButton' type='button' onClick={logout}>Logout</button>
    </section>
  </div>
  )
}

export default withRouter(NavBar)