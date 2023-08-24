import React from 'react'

import LoginNav from './LoginNav'
import LoginPage from './LoginPage'

const Login = () => {
  return (
    <> 
      <LoginNav />
      <div className="min-h-full">
      <LoginPage />
      </div>
    </>
  )
}

export default Login