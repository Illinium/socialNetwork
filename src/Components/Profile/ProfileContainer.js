import React from "react";
import {connect} from "react-redux";
import Profile from './Profile';
import {getCurrentUser, getStatusText, setStatusEditCredentials, updateStatusText} from "../../reducers/profile";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let {userId} = this.props.match.params;
        if (!userId) {
            userId = this.props.id
        }
        this.props.getCurrentUser(userId);
        this.props.getStatusText(userId);
        if(userId != this.props.id ) {
           return this.props.setStatusEditCredentials(false)
        }
        this.props.setStatusEditCredentials(true)
    }

    render() {
        return (
            <>
             <Profile {...this.props}/>
            </>
        )
    }
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