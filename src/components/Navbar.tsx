import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/categories">Categories</Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  )
}

export default Navbar
