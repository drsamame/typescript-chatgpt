import { FormSelect } from 'react-bootstrap'
import { SUPORTED_LANGUAGES } from '../constant.d'
import { type FC, type ChangeEvent } from 'react'
import { type fromLanguage, type Language } from '../types'

type Props =
  | {
    type: 'from'
    value: fromLanguage
    onChange: (language: fromLanguage) => void
  }
  | {
    type: 'to'
    value: Language
    onChange: (language: Language) => void
  }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <FormSelect onChange={onChangeSelect} aria-label='Selecciona idioma' value={value}>
      {Object.entries(SUPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key}>{literal}</option>
      ))}
    </FormSelect>
  )
}
