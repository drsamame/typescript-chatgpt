import { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { type StateTranslator, type Action } from './types.d'

const initialState: StateTranslator = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  isLoading: false
}

function reducer(state: StateTranslator, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGE') {
    return {
      ...state,
      fromLanguage: state.fromLanguage,
      toLanguage: state.toLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FRONT_TEXT') {
    return {
      ...state,
      isLoading: true,
      fromText: action.payload
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      isLoading: false,
      result: action.payload
    }
  }

  return state
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
