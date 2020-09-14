import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../reducers/auth";
import {Redirect} from "react-router-dom";

let LoginContainer= ({login, authorized}) => {
    const submit = values => {
        login(values)
    }
    if(authorized) {
        return <Redirect to="/profile" />
    }

    return <LoginForm onSubmit={submit} />
}

const mapStateToProps = state => ({
    authorized: state.auth.authorized
})


export default connect(mapStateToProps, {login})(LoginContainer);