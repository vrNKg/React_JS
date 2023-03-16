import React from 'react'
import './textArea.css'

class TextArea extends React.Component {
    render() {
        const { txtAreas, onChange , state } = this.props
        return (
            txtAreas.map((txtArea) => {
              let value = state[txtArea.name]
              return (
                  <div key={txtArea.id} className='txtArea-field'>
                      <label className='txtArea-field__label' htmlFor='txtArea'>{txtArea.title}</label>
                      <textarea
                      className='txtArea-field__txtArea'
                      id='txtArea'
                      placeholder={txtArea.title}
                      rows={7}
                      maxLength='600'
                      name={txtArea.name}
                      onChange={(event) => onChange(event)}
                      value={value.value}/>
                  </div>
              )
            })
          )
      }
}

export {TextArea}