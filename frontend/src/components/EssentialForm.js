import { React, useState } from 'react'
import Message from './Message'
import "./Forms.css"

const EssentialForm = () => {

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
            pharmacyOne: { pharmacyOne }
        }

        store("essencial", JSON.stringify(essentials))

        console.log(essentials)
    }


    return (
        <div id='essential'>
            <Message message="Category One: Essentials spendings" />
            <form id='spendings-data' className='essential-spendings-data'>
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
                <button onClick={submitForm} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EssentialForm