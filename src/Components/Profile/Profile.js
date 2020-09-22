import React, {Fragment} from "react";
import Comments from "./Comments/Comments";
import Loader from "../Common/Loader/Loader";
import ProfileStatus from "./ProfileStatus";
import imgStandart from "../../assets/default_user_photo.png";

const Profile = ({posts, currentUser, statusText, statusEditCredentials, updateStatusText, uploadPhotoFile}) => {
    if(!currentUser) {
        return <Loader />
    }
    const uploadPhoto = (e) => {
        uploadPhotoFile(e.target.files[0])
    }
    return (
        <Fragment>
            <div className='profile'>
                <img src={currentUser.photos.large !== null ? currentUser.photos.large : imgStandart} alt="Standart User IMG" />
                {
                    statusEditCredentials && <input type="file" onChange={uploadPhoto} />
                }
                <h1>{currentUser.fullName}</h1>
                <ProfileStatus statusText={statusText} statusEditCredentials={statusEditCredentials} updateStatusText={updateStatusText} />
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