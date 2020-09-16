import React from "react";
import styles from './User.module.css';
import {NavLink} from "react-router-dom";

const User = ({user: {name, photos, followed, id}, followUnfollowUser, blockBtnById} ) => {
    const imgStandart = "https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped.png";

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