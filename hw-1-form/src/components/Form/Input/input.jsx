import React from 'react'
import './input.css'

const inputs = [
    {title: 'Имя', type: 'text'},
    {title: 'Фамилия', type: 'text'},
    {title: 'Дата рождения', type: 'date'},
    {title: 'Телефон', type: 'tel', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}'},
    {title: 'Сайт', type: 'url',  pattern: 'https://.*'},
]

class Input extends React.Component {
    constructor() {
        super()
        
        this.state = { inputs }
    }
    
    render() {
        return (
            this.state.inputs.map((input) => {
                return (
                    <div className='input-field'>
                        <label className='input-field__label' for='inpt'>{input.title}</label>
                        <input className='input-field__inpt' type={input.type} id='inpt' placeholder={input.title} pattern={input.pattern}/>
                    </div>
                )
            })
        )
    }
}

export {Input}
