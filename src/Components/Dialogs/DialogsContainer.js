import React from "react";
import {connect} from "react-redux";
import {messageOnChange, sendMessage} from "../../reducers/dialogs ";
import Dialogs from './Dialogs';
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

const DialogsContainer = ({contacts, dialogs, messageOnChange, sendMessage }) => {
    return <Dialogs contacts={contacts} dialogs={dialogs} messageOnChange={messageOnChange} sendMessage={sendMessage} />
}

const mapStateToProps = (state) => ({
    contacts: state.contacts,
    dialogs: state.dialogs
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {messageOnChange, sendMessage}))
(DialogsContainer);