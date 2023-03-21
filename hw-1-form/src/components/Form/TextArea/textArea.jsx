import React from 'react'
import './textArea.css'

class TextArea extends React.Component {
    render() {
        const { txtAreas, onChange , state } = this.props
        return (
            txtAreas.map((txtArea) => {
                let value = state[txtArea.name]
                let charsAvailable = txtArea.maxLength - value.length
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
                        value={value.value}
                      />
                        <span className="txtArea-chars__counter">
                            <span className="txtArea-chars__current">{charsAvailable}</span>
                            /
                            <span className="txtArea-chars__total">{txtArea.maxLength}</span>
                        </span>
                    </div>
                )
            })
        )
    }
}

export {TextArea}