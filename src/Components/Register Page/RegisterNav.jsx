import React from 'react'

// import link
import { Link } from 'react-router-dom'

// import components
import intLOGO from '../../assets/images/interactlogo.SVG'

const Register = () => {
  return (    
    <header className='py-6 mb-12 border-b'>
      <div className="container mx-auto flex justify-between items-center">

        {/* logo */}
        <Link to='/'>
          <img src={intLOGO} alt="" />
        </Link>
        {/* Buttons */}
        <div className="flex items-center gap-6">
        <Link className='font-[800] text-greenColor hover:text-softColor transition' to='/'>Log in</Link>
        <Link className='font-[800] text-greenColor py-1 px-1 hover:text-softColor border-b-[2px] border-greenColor hover:border-softColor transition' to='/Register'>Register</Link>
        </div>
      </div>
    </header>
  )
}

export default Register