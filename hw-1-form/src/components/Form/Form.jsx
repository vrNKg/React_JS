import React, {useState} from 'react'
import './Form.css'
import Input  from './Input/input'
import TextArea from './TextArea/textArea'
import Button from './Buttons/bttns'
import Modal from './Modal/Modal'


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

export default function Form() {
    const [customState, setState] = useState(initialData);

    const handleChange = (event) => {
        if (event.target.name === "phoneNumber") {
            const phoneMask = event.target.value
                  .replace(/\D/g, "")
                  .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/)

            const phone = phoneMask
                  .slice(1, 5)
                  .filter((item) => item !== "")
                  .join("-");
              
            setState((customState) => ({
                ...customState,
                [event.target.name]: phone
            }))
        } else if (event.target.name === 'name' || event.target.name === 'surname') {
            if (event.target.value.charAt(0) !== event.target.value.charAt(0).toUpperCase()) {
                setState((customState) => ({
                    ...customState,
                    [event.target.name]: event.target.value.toUpperCase()
                }))
            } else {
                setState((customState) => ({
                        ...customState,
                        [event.target.name]: event.target.value.trim()
                }))
            }
        } else {
            setState((customState) => ({
                ...customState,
                [event.target.name]: event.target.value.trim()
            }))
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        let isError = true
        
        inputs.forEach((name)=> {
            switch(customState[name.name]){
                case '':
                    setState((customState) => ({
                        ...customState,
                        [name.errorName]: 'Пожалуйста, заполните данное поле'
                    }))
                    isError = true
                    break
                default:
                    setState((customState) => ({
                        ...customState,
                        [name.errorName]: ''
                    }))
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
            setState((customState) => ({
                ...customState,
                isModalOpen: true
            }))
            }
    }
    
    const handleReset = () => {
        setState(initialData)
    }
        
    return (
            <form onSubmit={handleSubmit}  onReset={handleReset}>
                <fieldset className='inputs-field'>
                    <Input inputs={ inputs } onChange={handleChange} customState={customState}/>
                </fieldset>
                <fieldset className='textAreas-field'>
                    <TextArea txtAreas={ txtAreas } onChange={handleChange} customState={customState}/>
                </fieldset>
                <div className='buttons-field'>
                    <Button bttns={ bttns }/>
                </div>
                <Modal customState={customState}/>
            </form>
    )
}