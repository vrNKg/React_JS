import React from 'react'
import './bttns.css'

const bttns = [
    {title: 'Отменить', class: 'cancel'},
    {title: 'Сохранить', class: 'save'}
]

class Button extends React.Component {
    constructor() {
        super()

        this.state = { bttns }
    }
  
    render() {
        return (
            this.state.bttns.map((bttn) => {
                return (
                    <button className={bttn.class}>{bttn.title}</button>
                )
            })
        )
    }
}

export { Button }