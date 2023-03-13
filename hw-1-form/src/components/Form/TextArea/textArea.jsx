import React from 'react'
import './textArea.css'

const txtAreas = [
    {title: 'О себе'},
    {title: 'Стек технологий'},
    {title: 'Описание последнего проекта'},
]

class TextArea extends React.Component {
    constructor() {
      super()
    
      this.state = { txtAreas }
    }

    render() {
        return (
            this.state.txtAreas.map((txtArea) => {
              return (
                  <div className='txtArea-field'>
                      <label className='txtArea-field__label' for='txtArea'>{txtArea.title}</label>
                      <textarea className='txtArea-field__txtArea' placeholder={txtArea.title} rows={7} id='txtArea'></textarea>
                  </div>
              )
            })
          )
      }
}

export {TextArea}