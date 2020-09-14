import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, BrowserRouter} from "react-router-dom"
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/Users";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import {connect} from "react-redux";
import {initializeApp} from "./reducers/app-reducer";
import Loader from "./Components/Common/Loader/Loader";
import {compose} from "redux";



function App({initialize, initializeApp}) {
    useEffect(() => {
        initializeApp();
    }, []);

    if (!initialize) {
        console.log(initialize)
        return <Loader />
    }
  return (
      <BrowserRouter>
    <div className="App">
        <HeaderContainer />
        <Navbar />
        <div className="content">
            <Route path='/profile/:userId?' component={ProfileContainer} />
            <Route path='/dialogs' component={DialogsContainer} />
            <Route path='/users' component={UsersContainer} />
            <Route path='/login' component={LoginContainer} />
        </div>

    </div>
      </BrowserRouter>
  );
}

const mapStateToProps = state => ({
    initialize: state.appReducer.initialize
});

export default compose(
connect(mapStateToProps, {initializeApp}))
(App);
