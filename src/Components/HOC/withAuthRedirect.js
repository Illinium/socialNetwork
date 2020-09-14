import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


export const withAuthRedirect = (Component) => {
    const redirectComponent = (props) => {
        if(!props.authorized) return <Redirect to="/login" />
        return <Component {...props} />
    }
    return connect(mapStateToProps)(redirectComponent);
}

const mapStateToProps = state => ({
    authorized: state.auth.authorized
})