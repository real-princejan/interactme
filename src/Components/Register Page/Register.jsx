import React from 'react'

import RegisterNav from './RegisterNav'
import RegisterPage from './RegisterPage'

const Register = () => {
  return (
    <> 
    <RegisterNav />
    <div className="min-h-full">
    <RegisterPage />
    </div>
  </>
  )
}

export default Register