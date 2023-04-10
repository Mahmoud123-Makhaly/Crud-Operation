import React from 'react'
import { Link } from 'react-router-dom'

const Navs = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
     <Link to="/" style={{textDecoration:"none"}}>
     <a className="navbar-brand" href="#">Navbar</a>
     </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       <Link style={{textDecoration:"none"}} to="/">
       <li className ="nav-item">
       <a className="nav-link active" aria-current="page" href="#">Home</a>
     </li>
       </Link>
          
        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navs