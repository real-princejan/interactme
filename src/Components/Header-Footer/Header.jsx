import React, { useState } from 'react'

// import link
import { Link, useSearchParams } from 'react-router-dom'
// import images
import intLOGO from '../../assets/images/interactlogo.SVG'
// import components



const Header = () => {

    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle)

  return (
    <>
      <div className="w-full h-[80px] border-b">
        <div className="md:max-w-[1080px] sm:max-w-[600px] m-auto w-full h-full flex justify-between items-center">
         
            <img src={intLOGO} className='h-[45px]' />

            {/* Navbar */}
            <div className="hidden md:flex items-center">
                <ul className='flex gap-6 font-[600] text-sm'>
                  <Link className='hover:text-greenColor' to='/'>Home</Link>
                  <Link className='hover:text-greenColor' to='/'>About</Link>
                  <Link className='hover:text-greenColor' to='/'>Activities</Link>
                  <Link className='hover:text-greenColor' to='/'>Contact</Link>
                </ul>
            </div>

            {/* Navbar Right Side */}
            <div className="hidden md:flex text-sm font-[700] text-greenColor">
              <p className='flex justify-between items-center px-6 gap-2'><i class="ri-user-5-line" /> Joaquin Burdado</p>
              <button className='flex items-center px-4 py-1 gap-2 rounded-lg bg-transparent border hover:animate-pulse'><i class="ri-logout-circle-line" />Logout</button>
            </div>

            {/* Mobile Responsive View */}
            <div className="md:hidden cursor-pointer" onClick={handleClick}>
              {
                toggle ? <i class="ri-close-line" /> : <i class="ri-menu-3-fill" />
              }
            </div>


          </div>

              {/* Mobile Responsive view 2 */}
        <div className={toggle?'absolute z-10 p-4 w-full px-8 md:hidden':'hidden'}>
            <ul className='flex gap-6 font-[600] text-sm'>
                <Link className='hover:text-greenColor p-4' to='/'>Home</Link>
                <Link className='hover:text-greenColor p-4' to='/'>About</Link>
                <Link className='hover:text-greenColor p-4' to='/'>Activities</Link>
                <Link className='hover:text-greenColor p-4' to='/'>Contact</Link>

                <div className="flex flex-col my-4 gap-4 items-center justify-center text-greenColor">
                  <p className='flex justify-between items-center px-6 gap-2'><i class="ri-user-5-line" /> Joaquin Burdado</p>
                  <button className='flex items-center px-4 py-1 gap-2 rounded-lg bg-transparent border hover:animate-pulse'><i class="ri-logout-circle-line" />Logout</button>
                </div>

            </ul>
        </div>

      </div>
    </>
  )
}

export default Header