import React from 'react'

// import link
import { Link } from 'react-router-dom'

// import components
import Header from '../Header-Footer/Header'
import Footer from '../Header-Footer/Footer'

// import images
import r1img from '../../assets/images/Right side picture.png'

const HomePage = () => {
  return (
    <>
    <Header />


    {/* Landing Page */}
    <div className="w-full py-24">
          <div className="container max-w-[1080] m-auto grid grid-cols-2">
                <div className="">
                  <h1 className='md:text-5xl text-4xl font-[700] text-greenColor'>Know Your Mind <br />Heal Your Heart</h1>
                  <p className='text-lg text-greenColor'>Interact, Learn, and Assess your concerns</p>
                  
                  <Link to=''>
                      <button className='glow p-2 shadow-lg hover:glow rounded-lg text-md font-[600] border border-brightColor bg-brightColor'>Find Mental Health Support today</button>
                  </Link>
                </div>

                <img src={r1img} />

          </div>
  

    </div>


    <Footer />
    </>
  )
}

export default HomePage