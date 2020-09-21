import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {addAuthData, logout} from "../../reducers/auth";

const HeaderContainer = (props) => {
    const {addAuthData, logout} = props;
    useEffect(() => {
        addAuthData();
    }, [addAuthData])
    return (
        <Header {...props} logout={logout}/>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {addAuthData, logout})(HeaderContainer);