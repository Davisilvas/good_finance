import React from 'react'
import "./Message.css"

const Message = ({message, warning}) => {

    return (
        warning ? (
            <span id='message-span-warning'>{message}</span>
        ) : (
            <span id='message-span'>{message}</span>
        )
    )
}

export default Message