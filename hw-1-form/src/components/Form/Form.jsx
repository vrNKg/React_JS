import React from 'react'
import './Form.css'
import { Input } from './Input/input'
import { TextArea } from './TextArea/textArea'
import { Button } from './Buttons/bttns'
import { Modal } from './Modal/Modal'


const inputs = [
    {id: 1, name: 'name', title: 'Имя', type: 'text', errorName: 'nameError'},
    {id: 2, name: 'surname', title: 'Фамилия', type: 'text', errorName: 'surnameError'},
    {id: 3, name: 'dateOfBirth', title: 'Дата рождения', type: 'date', errorName: 'birthError'},
    {id: 4, name: 'phoneNumber', title: 'Телефон', type: 'tel', errorName: 'phoneError', pattern: '[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}', max: 12},
    {id: 5, name: 'website', title: 'Сайт', type: 'url', errorName: 'websiteError',  pattern: 'https://.*'},
]

const txtAreas = [
    {id: 1, name: 'about', title: 'О себе', maxLength: 600},
    {id: 2, name: 'stack', title: 'Стек технологий', maxLength: 600},
    {id: 3, name: 'lastProjectDescription', title: 'Описание последнего проекта', maxLength: 600},
]

const bttns = [
    {id: 1, title: 'Отменить', type: 'reset', class: 'cancel'},
    {id: 2, title: 'Сохранить', type: 'submit', class: 'save'}
]

const modalInfo = [
    {id: 1, title: 'Дата рождения'},
    {id: 2, title: 'Телефон'},
    {id: 3, title: 'Сайт'}

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

    nameError: '',
    surnameError: '',
    birthError: '',
    phoneError: '',
    websiteError: '',

    isModalOpen: false,
}

class Form extends React.Component {
    constructor() {
        super()
    
        this.state = {...initialData}
    }

    handleChange = (event) => {
        if (event.target.name === "phoneNumber") {
            const phoneMask = event.target.value
              .replace(/\D/g, "")
              .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/)

            const phone = phoneMask
              .slice(1, 5)
              .filter((item) => item !== "")
              .join("-");
      
            this.setState({
              [event.target.name]: phone
            })
        } else if (event.target.name === 'name' || event.target.name === 'surname') {
            if (event.target.value.charAt(0) !== event.target.value.charAt(0).toUpperCase()) {
                this.setState({
                    [event.target.name]: event.target.value.toUpperCase()
                })
            } else {
                this.setState({
                    [event.target.name]: event.target.value.trim()
                })
            }
        } else {
            this.setState({
                [event.target.name]: event.target.value.trim()
            })
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()

        let isError = true

        inputs.forEach((name)=> {
            switch(this.state[name.name]){
                case '':
                    this.setState({
                        [name.errorName]: 'Пожалуйста, заполните данное поле'
                    })
                    isError = true
                    break
                default:
                    this.setState({
                        [name.errorName]: ''
                    })
                    isError = false
                    break
            }
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })
        })

        if (!isError) {
            this.setState({
                isModalOpen: true

            })
        }

    }

    handleReset = () => {
        this.setState(initialData)
    }

    render() {
        const state = this.state
        return (
            <form onSubmit={this.handleSubmit}  onReset={this.handleReset}>
                <fieldset className='inputs-field'>
                    <Input inputs={ inputs } onChange={this.handleChange} state={state}/>
                </fieldset>
                <fieldset className='textAreas-field'>
                    <TextArea txtAreas={ txtAreas } onChange={this.handleChange} state={state}/>
                </fieldset>
                <div className='buttons-field'>
                    <Button bttns={ bttns }/>
                </div>
                <Modal state={state} modalInfo={ modalInfo }/>
            </form>
        )
    }
}

export { Form }