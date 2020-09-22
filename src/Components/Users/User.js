import React from "react";
import styles from './User.module.css';
import {NavLink} from "react-router-dom";
import imgStandart from "../../assets/default_user_photo.png"

const User = ({user: {name, photos, followed, id}, followUnfollowUser, blockBtnById} ) => {
    return (
        <div className={styles.user}>
            <NavLink to={`/profile/${id}`}>
            <img src={photos.small !== null ? photos.small : imgStandart} alt="Standart User IMG" />
            <h3>{name}</h3>
            </NavLink>
                <button
                disabled={blockBtnById.some(n => n === id)}
                onClick={() => followUnfollowUser(id, followed)}>{followed ? "Unfollow" : "Follow"}</button>
        </div>
    )
}

export default User;