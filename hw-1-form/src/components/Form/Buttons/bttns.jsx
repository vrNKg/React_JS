import React from 'react'
import './buttons.css'

export default function Button(props) {
    const { bttns } = props
    
    return (
        bttns.map((bttn) => {
            return (
                <button key={bttn.id} className={bttn.class} type={bttn.type}>{bttn.title}</button>
            )
        })
    )
}