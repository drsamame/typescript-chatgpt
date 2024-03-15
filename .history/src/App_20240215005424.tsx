import { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <h1>Google translate</h1>
      <button
        onClick={() => dispatch({ type: 'SET_FROM_LANGUAGE', payload: 'es' })}
      >
        Cambiar a español
      </button>
    </>
  )
}

export default App
