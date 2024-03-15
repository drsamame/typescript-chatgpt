export interface StateTranslator {
  fromLanguage: string
  toLanguage: string
  fromText: string
  result: string
  isLoading: boolean
}

export interface Action =
  | { type: 'SET_FROM_LANGUAGE', payload: String }
  | { type: 'INTERCHANGE_LANGUAGE', payload: String }
