import React from 'react'
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div>LandingPage
        <h1>Landing Page</h1>
        <Link to={'/home'}>
            <button>Home Dogs</button>
        </Link>
    </div>
  )
}

export default LandingPage