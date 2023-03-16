import React from 'react'
import './Form.css'
import { Input } from './Input/input'
import { TextArea } from './TextArea/textArea'
import { Button } from './Buttons/bttns'

const inputs = [
    {id: 1, name: 'name', title: 'Имя', type: 'text'},
    {id: 2, name: 'surname', title: 'Фамилия', type: 'text'},
    {id: 3, name: 'dateOfBirth', title: 'Дата рождения', type: 'date'},
    {id: 4, name: 'phoneNumber', title: 'Телефон', type: 'tel', pattern: '[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}', max: 12},
    {id: 5, name: 'website', title: 'Сайт', type: 'url',  pattern: 'https://.*'},
]

const txtAreas = [
    {id: 1, name: 'about', title: 'О себе'},
    {id: 2, name: 'stack', title: 'Стек технологий'},
    {id: 3, name: 'lastProjectDescription', title: 'Описание последнего проекта'},
]

const bttns = [
    {id: 1, title: 'Отменить', type: 'reset', class: 'cancel'},
    {id: 2, title: 'Сохранить', type: 'submit', class: 'save'}
]

const initialData = {
    name: '',
    surname: '',
    dateOfBirth: '',
    phoneNumber: '',
    website: '',
    about: '',
    stack: '',
    lastProjectDescription: '',
}

class Form extends React.Component {
    constructor() {
        super()
    
        this.state = {...initialData}
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const { name, surname, dateOfBirth, phoneNumber, website, about, stack, lastProjectDescription } =
            this.state
        console.log(`
        Name: ${name}
        Surname: ${surname}
        Date of birth: ${dateOfBirth}
        Phone number: ${phoneNumber}
        Website: ${website}
        About: ${about}
        Technology stack: ${stack}
        Last project description: ${lastProjectDescription}
        `)
    }

    render() {
        const state = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset className='inputs-field'>
                    <Input inputs={ inputs } onChange={this.handleChange} state={state}/>
                </fieldset>
                <fieldset className='txtAreas-field'>
                    <TextArea txtAreas={ txtAreas } onChange={this.handleChange} state={state}/>
                </fieldset>
                <div className='bttns-field'>
                    <Button bttns={ bttns }/>
                </div>
            </form>
        )
    }
}

export { Form }