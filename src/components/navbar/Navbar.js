import { Link } from 'react-router-dom'
import React from 'react'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Dog App</h1>
            <nav>
                <Link to='/home' className='navbar_link'>Home</Link>
                <Link to='/about' className='navbar_link'>About</Link>
                <Link to='/contact' className='navbar_link'>Contact</Link>
            </nav>
        </div>
    )
}
