import React from 'react'
import  "../Login/login.css"

const Singup = () => {
  return (
    
       <div className='full-login'>
      <div className='login-header'>
      <div className=''>
          <h1 className=' font-bold text-[30px]'>Sign Up</h1>
      </div>
      <div>
        <form className='login-form'>
            <input className='input-fild' type='text' placeholder='Enter your Name'></input>
           <input className='input-fild' type='text' placeholder='Enter your Email'></input>
           <input className='input-fild' type='password' placeholder='Enter your Password'></input>
           <button className='sub-btn' type='submit'>Signup</button>
        </form>
      </div>
      </div>
    </div>
    
  )
}

export default Singup
