import type { StateTranslator, Action, FromLanguage, Language } from '../types.d'
import { AUTO_LANGUAGE } from '../constant.d'
import { useReducer } from 'react'

const initialState: StateTranslator = {
  fromLanguage: 'auto',
  toLanguage: 'es',
  fromText: '',
  result: '',
  isLoading: false
}

function reducer(state: StateTranslator, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGE') {
    if (state.fromLanguage === AUTO_LANGUAGE) return state
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    if (state.fromLanguage === action.payload) return state
    const loading = state.fromText === ''
    return {
      ...state,
      fromLanguage: action.payload,
      result: '',
      loading
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    if (state.toLanguage === action.payload) return state
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
  const [{ fromLanguage, toLanguage, fromText, result, isLoading }, dispatch] = useReducer(reducer, initialState)
  const interChangeLanguage = () =>
    dispatch({ type: 'INTERCHANGE_LANGUAGE' })
  const setFromLanguage = (payload: FromLanguage) =>
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  const setToLanguage = (payload: Language) =>
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  const setFromText = (payload: string) => dispatch({ type: 'SET_FRONT_TEXT', payload })
  const setResult = (payload: string) => dispatch({ type: 'SET_RESULT', payload })

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    isLoading,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
    interChangeLanguage
  }
}
