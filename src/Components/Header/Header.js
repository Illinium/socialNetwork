import React from "react";
import './Header.css'
import {NavLink} from "react-router-dom";

const Header =({auth: {login, authorized}, logout}) => {
    return (
        <div className="header">
            <img src="https://i.pinimg.com/736x/b7/9d/ef/b79defbf3ffcbb6e7bb1cfb2042122fb.jpg" alt=""/>

            <div className="login">{
                authorized ?
                    <span>
                        {login}
                        <div onClick={logout}>Logout</div>
                    </span>
                    : <NavLink to="/login">Login</NavLink>
            }
            </div>

        </div>
    )
    
}

export default Header;