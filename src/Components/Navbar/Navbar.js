import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/dialogs'>Dialogs</NavLink></li>
                <li><NavLink to='/users'>Users</NavLink></li>
                <li><NavLink to='/test2'>Test2</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;