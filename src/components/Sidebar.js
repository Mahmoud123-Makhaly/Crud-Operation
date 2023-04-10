import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <ul className='list-unstyled'>

    <li>
    <Link to="/" style={{textDecoration:"none"}}>Get All Products    </Link>
    </li>


  <li>
  <Link to="/Products"  style={{textDecoration:"none"}}>Get All Categories  </Link>
  </li>

    </ul>
    </div>
  )
}

export default Sidebar