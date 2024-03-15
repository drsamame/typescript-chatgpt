import { type StateTranslator, type Action } from '../types.d'
import { useReducer } from 'react'

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

export function useStore() {
  const [{ fromLanguage, toLanguage, fromText, result, isLoading }, dispatch] =
    useReducer(reducer, initialState)
  const interChangeLanguage = (payload) => dispatch({ type: 'INTERCHANGE_LANGUAGE' })
  const setFromLanguage = (payload) => dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  const setToLanguage = (payload) => dispatch({ type: 'SET_TO_LANGUAGE', payload })
  const setFromText = (payload) => dispatch({ type: 'SET_FRONT_TEXT', payload })
  const setResult = (payload) => dispatch({ type: 'SET_RESULT', payload })

  return { fromLanguage, toLanguage, fromText, result, isLoading, setFromLanguage, setToLanguage, setFromText, setResult }
}
