import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: ''
}

function App() {
  return (
    <>
      <h1>Google translate</h1>
    </>
  )
}

export default App
