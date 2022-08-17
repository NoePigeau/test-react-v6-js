import React from 'react'

const MsgError = ({msg}) => {
    if(!msg || msg.length === 0) return null;
    return (
        <p className="error"> {msg} </p>
    )
}

export default MsgError;