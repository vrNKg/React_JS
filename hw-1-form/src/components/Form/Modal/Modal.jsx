import React from "react";
import './modal.css'

class Modal extends React.Component {
    render() {
        const { state } =
            this.props

        return (
            <React.Fragment>
                {state.isModalOpen && (<div className="modal">
                    <div className="modal-body">
                        <h1>{state.name} {state.surname}</h1>
                        
                        <div className="modal-inputs">
                            <div className="modal__fullfield-inpt">
                                <label htmlFor='fullfield-inpt' className="modal-fullfield__label">Дата рождения</label>
                                <input id='fullfield-inpt' value={state.dateOfBirth}/>
                            </div>
                            <div className="modal__fullfield-inpt">
                                <label htmlFor='fullfield-inpt' className="modal-fullfield__label">Телефон</label>
                                <input id='fullfield-inpt' value={state.phoneNumber}/>
                            </div>
                            <div className="modal__fullfield-inpt">
                                <label htmlFor='fullfield-inpt' className="modal-fullfield__label">Сайт</label>
                                <input id='fullfield-inpt' value={state.website}/>
                            </div>
                        </div>
                        <div className="modal-textAreas">
                            <div className="modal__fullfield-textArea">
                                <label htmlFor='fullfield-textArea' className="modal-fullfield__label">О себе</label>
                                <textarea id='fullfield-textArea' value={state.about}/>
                            </div>
                            <div className="modal__fullfield-textArea">
                                <label htmlFor='fullfield-textArea' className="modal-fullfield__label">Стек технологий</label>
                                <textarea id='fullfield-textArea' value={state.stack}/>
                            </div>
                            <div className="modal__fullfield-textArea">
                                <label htmlFor='fullfield-textArea' className="modal-fullfield__label">Описание последнего проекта</label>
                                <textarea id='fullfield-textArea' value={state.lastProjectDescription} readOnly/>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </React.Fragment>
        )
    }
}

export {Modal}