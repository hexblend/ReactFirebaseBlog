import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/signin' className="btn z-depth-0 blue darken-2">Login</NavLink></li>
        </ul>
    );
}

export default SignedOutLinks;