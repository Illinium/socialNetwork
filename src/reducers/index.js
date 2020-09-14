import {combineReducers} from "redux";
import dialogs from './dialogs ';
import contacts from "./contacts";
import profile from "./profile";
import users from "./users";
import appReducer from "./app-reducer";
import auth from "./auth";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    dialogs,
    contacts,
    profile,
    users,
    auth,
    appReducer,
    form: formReducer
})
