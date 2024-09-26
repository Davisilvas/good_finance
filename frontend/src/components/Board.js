import React from 'react'
import DataForm from './DataForm'
import Message from './Message'
import Income from './Income'
import "./Board.css"

const Board = () => {
    return (
        <div id='board-container'>
            <div id='board'>
                <Message message="Please make sure to correctly input your data" />
                <Income />
                <DataForm essential={true} />
                <DataForm essential={false} />
            </div>
        </div>
    )
}

export default Board