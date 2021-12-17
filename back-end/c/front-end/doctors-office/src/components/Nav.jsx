import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='bar'>
            <Link to='/'>Home</Link>
            <Link to='/doctor'>Doctor Page</Link>
            <Link to='/patient'>Sign up</Link>
            <Link to='/contact'>Contact</Link>   
        </div>
    )
}
