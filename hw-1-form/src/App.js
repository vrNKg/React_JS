import React from 'react'
import './App.css'
import Form from './components/Form/Form'

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Создание анкеты</h1>
      </header>
      <main>
        <Form />
      </main>
    </div>
  )
}