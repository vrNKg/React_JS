import React from 'react'
import './textArea.css'

export default function TextArea(props) {
    const { txtAreas, onChange , customState } = props
    return (
        txtAreas.map((txtArea) => {
            let value = customState[txtArea.name]
            let valueLength = value.length
            return (
                <div key={txtArea.id} className='txtArea-field'>
                    <label className='txtArea-field__label' htmlFor='txtArea'>{txtArea.title}</label>
                    <textarea
                    className='txtArea-field__txtArea'
                    id='txtArea'
                    placeholder={txtArea.title}
                    rows={7}
                    maxLength={txtArea.maxLength}
                    name={txtArea.name}
                    onChange={(event) => onChange(event)}
                    value={value}
                  />
                    <span className="txtArea-chars__counter">
                        <span className="txtArea-chars__current">{txtArea.maxLength - valueLength}</span>
                        /
                        <span className="txtArea-chars__total">{txtArea.maxLength}</span>
                    </span>
                </div>
            )
        })
    )
}