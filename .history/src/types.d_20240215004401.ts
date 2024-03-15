export interface StateTranslator {
  fromLanguage: string
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
