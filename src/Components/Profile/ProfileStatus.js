import React from "react";

class ProfileStatus extends React.Component {
    state = {
        prevStatusText: this.props.statusText,
        newStatusText: this.props.statusText,
        editStatus: false
    }

    onEditStatusChange = () => {
        this.setState({
            editStatus: !this.state.editStatus
        })
}

    statusTextChange = (e) => {
        this.setState({
            newStatusText: e.target.value
        })
    }
    updateStatus = () => {
        this.onEditStatusChange();
        if(this.state.prevStatusText !== this.state.newStatusText) {
            this.setState({
                prevStatusText: this.state.newStatusText
            })
            this.props.updateStatusText(this.state.newStatusText);
        }
    }


    render () {
        return (
            <div>
                { this.props.statusEditCredentials ?
                    this.state.editStatus ?
                        <input type="text" autoFocus={true}
                               onBlur={this.updateStatus}
                               value={this.state.newStatusText}
                               onChange={(e) => this.statusTextChange(e)} /> :
                        <div onDoubleClick={this.onEditStatusChange}>{this.state.prevStatusText === null ? 'Edit Your Status here.' : this.state.prevStatusText}</div>
                    : <div>{this.state.prevStatusText}</div>
                }
            </div>
        )
    }

}

export default ProfileStatus;