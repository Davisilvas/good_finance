import { useState } from 'react'
import Message from './Message'
import "./Forms.css"

const Income = () => {
    const [income, setIncome] = useState()

    const store = (key, value) => {
        localStorage.setItem(key, value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        // console.log(typeof (income))\
        //comentário

        const monthlyIncome = {
            "income": { income }
        }
        store("income", JSON.stringify(monthlyIncome))
    }
    return (
        <form id='income-form'>
            <label id='input-label'>
                <Message message="Insira a sua renda mensal:" />
                <input
                    onChange={(e) => setIncome(parseFloat(e.target.value))}
                    type='number'
                    name='renda'>
                </input>
            </label>
            <button onClick={submitForm} type='submit'>Submit</button>
        </form>
    )
}

export default Income