import React from 'react'
import './input.css'

class Input extends React.Component {
    render() {
        const { inputs , onChange , state } = this.props
        return (
            inputs.map((input) => {
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
                        value={state[input.name]}
                        />
                        <p className='input-field__error'>{state[input.errorName]}</p>
                    </div>
                )
            })
        )
    }
}

export {Input}
