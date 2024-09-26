import { React, useState } from 'react'
import Message from './Message'
import "./Forms.css"

const NonEssential = () => {

    const [streaming, setStreaming] = useState('')
    const [creditCard, setCreditCard] = useState('')
    const [fastFood, setFastFood] = useState('')
    const [publicTransport, setPublicTransport] = useState('')
    const [mobileBill, setMobileBill] = useState('')
    const [fuel, setFuel] = useState('')
    const [pharmacyTwo, setPharmacyTwo] = useState('')
    const [vehicle, setVehicle] = useState('')
    const [outing, setOuting] = useState('')

    const store = (key, value) => {
        localStorage.setItem(key, value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        const nonEssental = {
            "streaming": { streaming },
            "creditCard": { creditCard },
            "fastFood": { fastFood },
            "publicTransport": { publicTransport },
            "mobileBill": { mobileBill },
            "fuel": { fuel },
            "pharmacyTwo": { pharmacyTwo },
            "vehicle": { vehicle },
            "outing": { outing }
        }

        store("n_essencial", JSON.stringify(nonEssental))
        console.log(nonEssental)
    }

    return (
        <div id='non-essential'>
            <Message message="Category Two: Non Essentials spendings" />
            <form id='spendings-data' className='non-essential-spendings-data'>
                <label id="input-label">
                    <span>Streaming</span>
                    <input
                        onChange={e => setStreaming(parseFloat(e.target.value))}
                        type='number'
                        name='streaming'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Cartão</span>
                    <input
                        onChange={e => setCreditCard(parseFloat(e.target.value))}
                        type='number'
                        name='cartao'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Fast Food</span>
                    <input
                        onChange={e => setFastFood(parseFloat(e.target.value))}
                        type='number'
                        name='fastfood'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Transporte</span>
                    <input
                        onChange={e => setPublicTransport(parseFloat(e.target.value))}
                        type='number'
                        name='transporte'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Telefone</span>
                    <input
                        onChange={e => setMobileBill(parseFloat(e.target.value))}
                        type='number'
                        name='telefone'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Combustível</span>
                    <input
                        onChange={e => setFuel(parseFloat(e.target.value))}
                        type='number'
                        name='combustivel'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Farmácia II</span>
                    <Message message="Cosméticos" warning={true} />
                    <input
                        onChange={e => setPharmacyTwo(parseFloat(e.target.value))}
                        type='number'
                        name='farmaciaII'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Veículo</span>
                    <Message message="Financiamento / Manutenção" warning={true} />
                    <input
                        onChange={e => setVehicle(parseFloat(e.target.value))}
                        type='number'
                        name='veiculo'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Saídas</span>
                    <Message message="Passeios, cinema, shows, restaurantes..." warning={true} />
                    <input
                        onChange={e => setOuting(parseFloat(e.target.value))}
                        type='number'
                        name='saidas'>
                    </input>
                </label>
                <button onClick={submitForm} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NonEssential