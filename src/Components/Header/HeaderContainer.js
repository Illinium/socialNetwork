import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {addAuthData, logout} from "../../reducers/auth";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.addAuthData()
    }
    render() {
        return (
            <Header {...this.props} logout={this.props.logout} />
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default  connect(mapStateToProps, {addAuthData, logout})(HeaderContainer);