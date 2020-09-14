import React from "react";

const Comments = ({name, comment}) => {
    return (
        <div className='comment'>
            <div>
                <div>{name}</div>
                <div>{comment}</div>
            </div>
        </div>

    )
}

export default Comments;