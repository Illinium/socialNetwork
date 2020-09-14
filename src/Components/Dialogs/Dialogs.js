import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import './Dialogs.css'
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = ({contacts, dialogs: {newMessageText, dialog}, messageOnChange, sendMessage }) => {
    return (
        <div className="dialogs">
            <div className="contact-list">
                <ul>
                    {
                        contacts.map((contact) => <DialogItem key={contact.id} id={contact.id} name={contact.userName}/>)
                    }
                </ul>
            </div>
            <div className="messages">
                <div className="messagesBody">
                    {
                        dialog.map((m) => <MessageItem message={m.message} key={m.id} /> )
                    }
                </div>
                <input type="text" value={newMessageText} onChange={(e) => messageOnChange(e.target.value)} />
                <button onClick={sendMessage}>Send</button>

            </div>
        </div>
    )
}

export default Dialogs;