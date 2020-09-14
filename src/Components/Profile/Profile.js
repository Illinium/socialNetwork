import React, {Fragment} from "react";
import Comments from "./Comments/Comments";
import Loader from "../Common/Loader/Loader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Profile = ({posts, currentUser, statusText, statusEditCredentials, updateStatusText}) => {
    if(!currentUser) {
        return <Loader />
    }
    return (
        <Fragment>
            <div className='profile'>
                <h1>{currentUser.fullName}</h1>
                <ProfileStatusWithHooks statusText={statusText} statusEditCredentials={statusEditCredentials} updateStatusText={updateStatusText} />
            </div>
            <ul>
                {
                    posts.map((post) =>  <Comments key={post.id} name={post.name} comment={post.comment} />
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Profile;