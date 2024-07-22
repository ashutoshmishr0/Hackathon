import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='first'>
            <h1 className=' font-bold'>GO HACKATHON</h1>
            <p className=' my-4 p-3'>Go Hackathon comprises eminent Industry professionals, educators, and students meant to nurture talent among budding tech professionals.</p>
        </div>
        <div className='second font-bold'></div>
        <h1 className=' font-bold'>Quick Links</h1>
        <div className='links'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>Events</a></li>
        </ul>
        </div>
        <div>
            <h1 className=' font-bold'>Contact Us</h1>
        </div>
        <div>
            <h1 className=' font-bold'>Subscribe</h1>
        </div>
    </div>
  )
}

export default Navbar
