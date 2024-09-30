import { useState } from 'react'
import Message from './Message'
import "./Forms.css"

const DataForm = () => {
    // income state
    const [income, setIncome] = useState()
    // essential states
    const [rent, setRent] = useState('')
    const [condominiumFee, setCondominiumFee] = useState('')
    const [internet, setInternet] = useState('')
    const [waterBill, setWaterBill] = useState('')
    const [lightBill, setLightBill] = useState('')
    const [cookingGas, setCookingGas] = useState('')
    const [iptu, setIptu] = useState('')
    const [grocery, setGrocery] = useState('')
    const [healthCarePlan, setHealtCarePlan] = useState('')
    const [pharmacyOne, setPharmacyOne] = useState('')
    // non essential states
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
        const essentials = {
            rent: { rent },
            condominium: { condominiumFee },
            internet: { internet },
            water: { waterBill },
            light: { lightBill },
            cookingGas: { cookingGas },
            IPTU: { iptu },
            grocery: { grocery },
            healthCare: { healthCarePlan },
            pharmacyOne: { pharmacyOne },
        }
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
        const monthlyIncome = {
            "income": { income }
        }

        store("income", JSON.stringify(monthlyIncome))
        store("essencial", JSON.stringify(essentials))
        store("n_essencial", JSON.stringify(nonEssental))

        console.log(essentials)
        console.log(nonEssental)
    }

    // const handleInput = (data) => {

    //     data = parseFloat(data)
    //     if(data === ""){
    //         data = 0;
    //         return data;
    //     }

    //     return data;
    // }


    return (
        <div id='forms-container'>
            <form id='spendings-data'>
                <label id='input-label'>
                    <Message message="Insira a sua renda mensal:" />
                    <input
                        onChange={(e) => setIncome(parseFloat(e.target.value))}
                        type='number'
                        name='renda'>
                    </input>
                </label>
                <Message message="Category One: Essentials spendings" />
                <label id="input-label">
                    <span>Aluguel</span>
                    <input
                        onChange={e => setRent(parseFloat(e.target.value))}
                        type='number'
                        name='aluguel'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Condomínio</span>
                    <input
                        onChange={e => setCondominiumFee(parseFloat(e.target.value))}
                        type='number'
                        name='condominio'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Internet</span>
                    <input
                        onChange={e => setInternet(parseFloat(e.target.value))}
                        type='number'
                        name='internet'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Água</span>
                    <Message message="Não preencha caso esteja incluso no condomínio" warning={true} />
                    <input
                        onChange={e => setWaterBill(parseFloat(e.target.value))}
                        type='number'
                        name='agua'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Luz</span>
                    <Message message="Não preencha caso esteja incluso no condomínio" warning={true} />
                    <input
                        onChange={e => setLightBill(parseFloat(e.target.value))}
                        type='number'
                        name='luz'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Gás</span>
                    <Message message="Não preencha caso esteja incluso no condomínio" warning={true} />
                    <input
                        onChange={e => setCookingGas(parseFloat(e.target.value))}
                        type='number'
                        name='gas'>
                    </input>
                </label>
                <label id="input-label">
                    <span>IPTU</span>
                    <Message message="Não preencha caso esteja incluso no condomínio" warning={true} />
                    <input
                        onChange={e => setIptu(parseFloat(e.target.value))}
                        type='number'
                        name='iptu'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Mercado</span>
                    <Message message="Não preencha caso seja Vale Alimentação " warning={true} />
                    <input
                        onChange={e => setGrocery(parseFloat(e.target.value))}
                        type='number'
                        name='mercado'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Plano de Saúde</span>
                    <Message message="Não preencha caso seja benefício do trabalho" warning={true} />
                    <input
                        onChange={e => setHealtCarePlan(parseFloat(e.target.value))}
                        type='number'
                        name='planosaude'>
                    </input>
                </label>
                <label id="input-label">
                    <span>Famácia I</span>
                    <Message message="Remédios" warning={true} />
                    <input
                        onChange={e => setPharmacyOne(parseFloat(e.target.value))}
                        type='number'
                        name='farmaciaI'>
                    </input>
                </label>

                <Message message="Category Two: Non Essentials spendings" />
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

export default DataForm