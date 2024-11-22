import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
<>
<nav>
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
</nav>
</>
  )
}

STARTER-REACT-ROUTER-DOM
export default Header
