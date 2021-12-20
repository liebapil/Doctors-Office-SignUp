import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='bar'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/doctor' className='link'>Doctor Page</Link>
            <Link to='/patient' className='link'>Sign up</Link>
            <Link to='/contact' className='link'>Contact</Link>   
        </div>
    )
}
