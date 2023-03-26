import React from 'react'
import './input.css'

export default function Input(props) {
    const  { inputs , onChange , customState } = props
    
    return (
        inputs.map((input) => {
            let value = input.name
            return (
                <div key={input.id} className='input-field'>
                    <label className='input-field__label' htmlFor='inpt'>{input.title}</label>
                    <input
                    className='input-field__inpt'
                    type={input.type}
                    id='inpt'
                    placeholder={input.title}
                    pattern={input.pattern}
                    maxLength={input.max}
                    name={input.name}
                    onChange={(event) => onChange(event)}
                    value={customState[value]}
                    />
                    <p className='input-field__error'>{customState[input.errorName]}</p>
                </div>
            )
        }) 
    )
}
