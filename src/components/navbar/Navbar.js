import { Link } from 'react-router-dom'
import React from 'react'

export const Navbar = () => {
    return (
        <>
            <h1>Dog App</h1>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </>
    )
}
