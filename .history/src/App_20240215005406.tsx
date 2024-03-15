import { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [{ fromLanguage, toLanguage, fromText, result, isLoading }, dispatch] =
    useReducer(reducer, initialState)
  console.log(fromLanguage)
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
