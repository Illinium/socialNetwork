import React, {useState, useEffect} from "react";

const ProfileStatusWithHooks = ({statusText, statusEditCredentials, updateStatusText}) => {
    useEffect(() => {
        setLocalStatusText(statusText);
    }, [statusText])
    const [editStatus, setEditStatus] = useState(false)
    const [localStatusText, setLocalStatusText] = useState(statusText)
    const onStatusTextUpdate = () => {
        setEditStatus(false);
        updateStatusText(localStatusText);
    }
        return (
            <div>
                { statusEditCredentials ?
                    editStatus ?
                        <input type="text" autoFocus={true}
                               onBlur={onStatusTextUpdate}
                               value={localStatusText}
                               onChange={(e) => setLocalStatusText(e.target.value)} /> :
                        <div onDoubleClick={() => setEditStatus(true)}>
                            {statusText}
                        </div>
                    : <div>{statusText}</div>
                }
            </div>
        )

}

export default ProfileStatusWithHooks;