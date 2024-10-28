import React from 'react'
import Dataform from '../pages/Form/DataForm'
import Message from './Message'
import "./Board.css"

const Board = () => {
    return (
        <div id='board-container'>
            <div id='board'>
                <Message message="Please make sure to correctly input your data" />
                <Dataform />
            </div>
        </div>
    )
}

export default Board