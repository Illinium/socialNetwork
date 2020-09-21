import React, { useEffect } from "react";
import {connect} from "react-redux";
import Profile from './Profile';
import {getCurrentUser, getStatusText, setStatusEditCredentials, updateStatusText} from "../../reducers/profile";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {
    const{id, getCurrentUser, getStatusText, setStatusEditCredentials, match } = props;
    useEffect(() => {
        let {userId} = match.params;
            if (!userId) {
                userId = id
            }
            getCurrentUser(userId);
            getStatusText(userId);
            if(userId !== props.id ) {
               return setStatusEditCredentials(false)
            }
            setStatusEditCredentials(true)
    }, [id, setStatusEditCredentials, getCurrentUser, getStatusText ]);
        return (
            <>
             <Profile {...props}/>
            </>
        )
}

const mapStateToProps = state => ({
    posts: state.profile.posts,
    currentUser: state.profile.currentUser,
    isLoading: state.profile.isLoading,
    statusText: state.profile.statusText,
    authorized: state.auth.authorized,
    id: state.auth.id,
    statusEditCredentials: state.profile.statusEditCredentials
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getCurrentUser, getStatusText, setStatusEditCredentials, updateStatusText})
)(ProfileContainer)