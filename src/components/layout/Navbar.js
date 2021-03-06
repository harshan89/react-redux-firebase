import React from 'react'
import { Link } from 'react-router-dom'
import SignedInUser from './SignedInUser'
import SignedOutUser from './SignedOutUser'
const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Live</Link>
                <SignedInUser />
                <SignedOutUser />
            </div>
        </nav>
    );
}

export default Navbar;