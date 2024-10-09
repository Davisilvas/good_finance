import React, { useContext } from 'react'
import Dataform from '../pages/Form/DataForm'
import Message from './Message'
import "./Board.css"
import FinancialDataContext from '../Contexts/FinancialContext'

const Board = () => {
    const { data } = useContext(FinancialDataContext)

    return (
        <div id='board-container'>
            <div id='board'>
                <span>31231</span>
                <Message message="Please make sure to correctly input your data" />
                <Dataform />
            </div>
        </div>
    )
}

export default Board