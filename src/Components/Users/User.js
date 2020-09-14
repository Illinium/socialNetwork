import React from "react";
import styles from './User.module.css';
import {NavLink} from "react-router-dom";

const User = ({user: {name, photos, followed, id}, followUser, unfollowUser, blockBtnById} ) => {
    const imgStandart = "https://wowsciencecamp.org/wp-content/uploads/2018/07/dummy-user-img-1-400x400_x_acf_cropped.png";

    return (
        <div className={styles.user}>
            <NavLink to={`/profile/${id}`}>
            <img src={photos.small !== null ? photos.small : imgStandart} alt="Standart User IMG" />
            <h3>{name}</h3>
            </NavLink>
            {
                followed ? <button
                disabled={blockBtnById.some(n => n === id)}
                onClick={() => unfollowUser(id)}>Unfollow</button> :
                <button
                    disabled={blockBtnById.some(n => n === id)}
                    onClick={() => followUser(id)}>Follow</button>
            }
        </div>
    )
}

export default User;