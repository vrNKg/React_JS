import React from 'react'
import './buttons.css'

class Button extends React.Component {
    render() {
        const { bttns } = this.props
        return (
            bttns.map((bttn) => {
                return (
                    <button key={bttn.id} className={bttn.class} type={bttn.type}>{bttn.title}</button>
                )
            })
        )
    }
}

export { Button }