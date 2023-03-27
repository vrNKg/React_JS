import React from "react";
import './modal.css'

export default function Modal(props) {
    const { customState } = props
    return (
        <React.Fragment>
            {customState.isModalOpen && (<div className="modal">
                <div className="modal-body">
                    <h1>{customState.name} {customState.surname}</h1>
                    <div className="modal-inputs">
                        <div className="modal__fullfield-inpt">
                            <label htmlFor='fullfield-inpt' className="modal-fullfield__label">Дата рождения</label>
                            <input id='fullfield-inpt' value={customState.dateOfBirth}/>
                        </div>
                        <div className="modal__fullfield-inpt">
                            <label htmlFor='fullfield-inpt' className="modal-fullfield__label">Телефон</label>
                            <input id='fullfield-inpt' value={customState.phoneNumber}/>
                        </div>
                        <div className="modal__fullfield-inpt">
                            <label htmlFor='fullfield-inpt' className="modal-fullfield__label">Сайт</label>
                            <input id='fullfield-inpt' value={customState.website}/>
                        </div>
                    </div>
                    <div className="modal-textAreas">
                        <div className="modal__fullfield-textArea">
                            <label htmlFor='fullfield-textArea' className="modal-fullfield__label">О себе</label>
                            <textarea id='fullfield-textArea' value={customState.about}/>
                        </div>
                        <div className="modal__fullfield-textArea">
                            <label htmlFor='fullfield-textArea' className="modal-fullfield__label">Стек технологий</label>
                            <textarea id='fullfield-textArea' value={customState.stack}/>
                        </div>
                        <div className="modal__fullfield-textArea">
                            <label htmlFor='fullfield-textArea' className="modal-fullfield__label">Описание последнего проекта</label>
                            <textarea id='fullfield-textArea' value={customState.lastProjectDescription} readOnly/>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </React.Fragment>
    )
}