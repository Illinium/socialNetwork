import React from "react";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    const {id, name} = props;
    return (
        <li ><NavLink to={`/dialogs/${id}`}>{name}</NavLink></li>
    )
}

export default DialogItem;