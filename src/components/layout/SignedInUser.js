import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInUser = () => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New project</NavLink></li>
            <li><NavLink to="/">Log out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">HM</NavLink></li>
        </ul>
    )
}

export default SignedInUser;