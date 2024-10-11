import React, { useContext } from 'react'
import Dataform from '../pages/Form/DataForm'
import Message from './Message'
import "./Board.css"
import FinancialDataContext from '../Contexts/FinancialContext'

const Board = () => {
    const { dataContext } = useContext(FinancialDataContext)

    if (dataContext === null) {
        return <p>Nenhum dado disponível</p>
    }

    return (
        <div id='board-container'>
            <div id='board'>
                {dataContext ? <p>Inputs: {JSON.stringify(dataContext.inputs)}</p> : <p>teste</p>}
                <Message message="Please make sure to correctly input your data" />
                <Dataform />
            </div>
        </div>
    )
}

export default Board