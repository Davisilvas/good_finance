import React from 'react'
import EssentialForm from './EssentialForm'
import NonEssential from './NonEssential'
import "./Forms.css"

const DataForm = ({ essential }) => {
    return (
        <div id='forms-container'>
            {
                essential
                    ? (<EssentialForm />)
                    : (<NonEssential />)
            }
        </div>
    )
}

export default DataForm