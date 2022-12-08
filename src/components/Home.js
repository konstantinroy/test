import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div className='home-page'>
            Home
            <div 
            className='links-block'>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            </div>
        </div>
    )
}

export default Home
