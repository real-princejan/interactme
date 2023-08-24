import React from 'react'

import { Link } from 'react-router-dom'

import intLOGO from '../../assets/images/interactlogo.SVG'

const LoginNav = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        {/* logo */}
        <Link to='/'>
          <img src={intLOGO} alt="" />
        </Link>
      </div>
    </React.Fragment>
  )
}

export default LoginNav