import { type AUTO_LANGUAGE, type SUPORTED_LANGUAGES } from './constant'

export type Language = keyof typeof SUPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface StateTranslator {
  fromLanguage: FromLanguage
  toLanguage: string
  fromText: string
  result: string
  isLoading: boolean
}

export type Action =
  | { type: 'INTERCHANGE_LANGUAGE' }
  | { type: 'SET_FROM_LANGUAGE', payload: string }
  | { type: 'SET_TO_LANGUAGE', payload: string }
  | { type: 'SET_FRONT_TEXT', payload: string }
  | { type: 'SET_RESULT', payload: string }
