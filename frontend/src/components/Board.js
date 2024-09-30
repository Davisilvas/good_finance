import React from 'react'
import DataForm from './DataForm'
import Message from './Message'
import "./Board.css"

const Board = () => {
    return (
        <div id='board-container'>
            <div id='board'>
                <Message message="Please make sure to correctly input your data" />
                <DataForm essential={true} />
            </div>
        </div>
    )
}

export default Board