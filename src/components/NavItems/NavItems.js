import React from 'react'
import { Link } from 'react-router-dom'
import { navI } from '../../pages/Portfolio/Portfolio'

const NavItems = () => {
  return (
    <div className="outer">
    <div className="inner">
      <ul>
        {navI.map((data) => (
          <li key={data.show} ><Link to={data.locate}>{data.show}</Link></li>
        ))}
      </ul>
    </div>
   
  </div>
  )
}

export default NavItems