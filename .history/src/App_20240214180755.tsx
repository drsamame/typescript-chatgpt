import { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: ''
}

funtion reducer(state, action){

}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>Google translate</h1>
    </>
  )
}

export default App
