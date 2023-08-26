import React from 'react'

// import links
import { Link } from 'react-router-dom'

// import components
import Header from '../Header-Footer/Header'
import Footer from '../Header-Footer/Footer'

// import image
import guideIMG from '../../assets/images/guide.svg'
import ListGuide from './ListGuide'


const Guide = () => {
  return (
    <>
    <Header />
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0 px-8 p-10">
            <div className="w-1/2 hidden md:block">
                <img className='p-2 gap-8 mt-24 items-center justify-center' src={guideIMG} />
            </div>

          <div className="w-full md:w-1/2 px-8 mt-8">
            <h2 className='font-[700] text-2xl'>Most questions about Mental Health</h2>

            <ListGuide />
          </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Guide