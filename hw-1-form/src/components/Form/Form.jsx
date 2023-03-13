import React from 'react'
import './Form.css'
import { Input } from "./Input/input"
import { TextArea } from "./TextArea/textArea"
import { Button } from '../Buttons/bttns'

class Form extends React.Component {
    render() {
        return (
            <form>
                <fieldset className='inputs-field'>
                    <Input />
                </fieldset>
                <fieldset className='txtAreas-field'>
                    <TextArea />
                </fieldset>
                <div className='bttns-field'>
                    <Button/>
                </div>
            </form>
        )
    }
}

export { Form }