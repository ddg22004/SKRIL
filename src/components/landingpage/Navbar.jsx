import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>  <nav className='bg-gradient-to-br from-zinc-900 to-black p-4 text-gray-400 font-light text-xl flex justify-between'>
      <div className='flex justify-center'>
      <Link to='/' className='mx-3 '>Home</Link>
      <Link to='/about' className='mx-3'>About</Link>
      <Link className='mx-3'>Features</Link>
      <Link className='mx-3'>Contact</Link>
      </div><Link to='/login' className='mx-3'>Login/SignUp</Link>
    </nav>
  
  </>
  )
}

export default Navbar