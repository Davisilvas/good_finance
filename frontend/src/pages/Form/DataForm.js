import { useEffect, useState, useContext } from 'react'
import { useFetch } from '../../hooks/useFetch'
import FinancialDataContext from '../../Contexts/FinancialContext'
import Message from '../../components/Message'
import "./Forms.css"

const DataForm = () => {
    const URL = "http://localhost:5000/api/data"

    const { dataContext, setDataContext } = useContext(FinancialDataContext)
    // const results = data

    // ACTIVES THE FETCH
    const [triggerFetch, setTriggerFetch] = useState(false)

    // income state
    const [incomeFormData, setIncomeFormData] = useState({
        income: 0,
    })
    const handleIncomeFormDataEdit = (event, name) => {
        setIncomeFormData({
            ...incomeFormData,
            [name]: event.target.value
        })
    }
    // essential states
    const [essentialsFormData, setEssentialsFormData] = useState({
        rent: 0,
        condominiumFee: 0,
        internet: 0,
        waterBill: 0,
        lightBill: 0,
        cookingGas: 0,
        iptu: 0,
        grocery: 0,
        healthCarePlan: 0,
        pharmacyOne: 0,
    })
    const handleEssentialsFormDataEdit = (event, name) => {
        setEssentialsFormData({
            ...essentialsFormData,
            [name]: event.target.value
        })
    }

    // non essential states
    const [nonEssentialFormData, setNonEssentialFormData] = useState({
        streaming: 0,
        creditCard: 0,
        fastFood: 0,
        publicTransport: 0,
        mobileBill: 0,
        fuel: 0,
        pharmacyTwo: 0,
        vehicle: 0,
        outing: 0,
    })
    const handleNonEssentialsFormDataEdit = (event, name) => {
        setNonEssentialFormData({
            ...nonEssentialFormData,
            [name]: event.target.value
        })
    }

    // data obj state
    const [financialData, setFinancialData] = useState({
        'essentials': {},
        'nonEssentials': {},
        'income': {}
    })



    const { data, loading, error } = useFetch(
        triggerFetch ? URL : null,
        triggerFetch
            ? {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(financialData)
            } : {}
    )

    useEffect(() => {
        setFinancialData({
            'essentials': essentialsFormData,
            "nonEssentials": nonEssentialFormData,
            "income": incomeFormData
        })
    }, [incomeFormData, essentialsFormData, nonEssentialFormData])
    
    useEffect(() => {
        if (triggerFetch) setTriggerFetch(false)
    }, [triggerFetch] )

    const submitForm = async (e) => {
        e.preventDefault()
        setTriggerFetch(true)
    }

    return (
        <div id='forms-container'>
            <form id='spendings-data' onSubmit={submitForm}>
                <label id='input-label'>
                    <Message message="Insira a sua renda mensal:" />
                    <input
                        required
                        type='number'
                        value={incomeFormData.income}
                        onChange={(e) => handleIncomeFormDataEdit(e, 'income')}
                    />
                </label>
                <Message message="Category One: Essentials spendings" />
                <label id="input-label">
                    <span>Aluguel</span>
                    <input
                        required
                        type='number'
                        value={essentialsFormData.rent}
                        onChange={e => handleEssentialsFormDataEdit(e, 'rent')}
                    />
                </label>
                <label id="input-label">
                    <span>Condomínio</span>
                    <input
                        required
                        type='number'
                        value={essentialsFormData.condominiumFee}
                        onChange={e => handleEssentialsFormDataEdit(e, 'condominiumFee')}
                    />
                </label>
                <label id="input-label">
                    <span>Internet</span>
                    <input
                        required
                        type='number'
                        value={essentialsFormData.internet}
                        onChange={e => handleEssentialsFormDataEdit(e, 'internet')}
                    />
                </label>
                <label id="input-label">
                    <span>Água</span>
                    <Message message="Não preencha caso esteja incluso no condomínio" warning={true} />
                    <input
                        type='number'
                        value={essentialsFormData.waterBill}
                        onChange={e => handleEssentialsFormDataEdit(e, 'waterBill')}
                    />
                </label>
                <label id="input-label">
                    <span>Luz</span>
                    <Message message="Não preencha caso esteja incluso no condomínio" warning={true} />
                    <input
                        type='number'
                        value={essentialsFormData.lightBill}
                        onChange={e => handleEssentialsFormDataEdit(e, 'lightBill')}
                    />
                </label>
                <label id="input-label">
                    <span>Gás</span>
                    <Message message="Não preencha caso esteja incluso no condomínio" warning={true} />
                    <input
                        type='number'
                        value={essentialsFormData.cookingGas}
                        onChange={e => handleEssentialsFormDataEdit(e, 'cookingGas')}
                    />
                </label>
                <label id="input-label">
                    <span>IPTU</span>
                    <Message message="Não preencha caso esteja incluso no condomínio" warning={true} />
                    <input
                        type='number'
                        value={essentialsFormData.iptu}
                        onChange={e => handleEssentialsFormDataEdit(e, 'iptu')}
                    />
                </label>
                <label id="input-label">
                    <span>Mercado</span>
                    <Message message="Não preencha caso seja Vale Alimentação " warning={true} />
                    <input
                        type='number'
                        value={essentialsFormData.grocery}
                        onChange={e => handleEssentialsFormDataEdit(e, 'grocery')}
                    />
                </label>
                <label id="input-label">
                    <span>Plano de Saúde</span>
                    <Message message="Não preencha caso seja benefício do trabalho" warning={true} />
                    <input
                        type='number'
                        value={essentialsFormData.healthCarePlan}
                        onChange={e => handleEssentialsFormDataEdit(e, 'healthCarePlan')}
                    />
                </label>
                <label id="input-label">
                    <span>Famácia I</span>
                    <Message message="Remédios" warning={true} />
                    <input
                        type='number'
                        value={essentialsFormData.pharmacyOne}
                        onChange={e => handleEssentialsFormDataEdit(e, 'pharmacyOne')}
                    />
                </label>

                <Message message="Category Two: Non Essentials spendings" />
                <label id="input-label">
                    <span>Cartão</span>
                    <input
                        required
                        type='number'
                        value={nonEssentialFormData.creditCard}
                        onChange={e => handleNonEssentialsFormDataEdit(e, 'creditCard')}
                    />
                </label>
                <label id="input-label">
                    <span>Streaming</span>
                    <input
                        type='number'
                        value={nonEssentialFormData.streaming}
                        onChange={e => handleNonEssentialsFormDataEdit(e, 'streaming')}
                    />
                </label>
                <label id="input-label">
                    <span>Fast Food</span>
                    <input
                        type='number'
                        value={nonEssentialFormData.fastFood}
                        onChange={e => handleNonEssentialsFormDataEdit(e, 'fastFood')}
                    />
                </label>
                <label id="input-label">
                    <span>Transporte</span>
                    <input
                        type='number'
                        value={nonEssentialFormData.publicTransport}
                        onChange={e => handleNonEssentialsFormDataEdit(e, 'publicTransport')}
                    />
                </label>
                <label id="input-label">
                    <span>Telefone</span>
                    <input
                        type='number'
                        value={nonEssentialFormData.mobileBill}
                        onChange={e => handleNonEssentialsFormDataEdit(e, 'mobileBill')}
                    />
                </label>
                <label id="input-label">
                    <span>Combustível</span>
                    <input
                        type='number'
                        name='combustivel'
                        value={nonEssentialFormData.fuel}
                        onChange={e => handleNonEssentialsFormDataEdit(e, 'fuel')}
                    />
                </label>
                <label id="input-label">
                    <span>Farmácia II</span>
                    <Message message="Cosméticos" warning={true} />
                    <input
                        type='number'
                        value={nonEssentialFormData.pharmacyTwo}
                        onChange={e => handleNonEssentialsFormDataEdit(e, 'pharmacyTwo')}
                    />
                </label>
                <label id="input-label">
                    <span>Veículo</span>
                    <Message message="Financiamento / Manutenção" warning={true} />
                    <input
                        type='number'
                        value={nonEssentialFormData.vehicle}
                        onChange={e => handleNonEssentialsFormDataEdit(e, 'vehicle')}
                    />
                </label>
                <label id="input-label">
                    <span>Saídas</span>
                    <Message message="Passeios, cinema, shows, restaurantes..." warning={true} />
                    <input
                        type='number'
                        value={nonEssentialFormData.outing}
                        onChange={e => handleNonEssentialsFormDataEdit(e, 'outing')}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default DataForm