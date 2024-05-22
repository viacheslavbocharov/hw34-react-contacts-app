import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.css';

export default function ErrorPage() {
  return (
    <div className='error-container'>
        <h1>404. Page not fount.</h1>
        <Link to="/"><h2>Go back to mainpage</h2></Link>
    </div>
  )
}
