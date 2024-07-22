import React from 'react'
import  "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='full-login'>
      <div className='login-header'>
      <div className=''>
          <h1 className=' font-bold text-[30px]'>Log in</h1>
      </div>
      <div>
        <form className='login-form'>
           <input className='input-fild' type='text' placeholder='Enter your Email'></input>
           <input className='input-fild' type='password' placeholder='Enter your Password'></input>
           <Link to="/">
           <button className='sub-btn' type='submit'>Login</button>
           </Link>
        </form>
        {/* <p>or</p>
        <p>create new user</p> */}
      </div>
      </div>
    </div>
  )
}

export default Login
