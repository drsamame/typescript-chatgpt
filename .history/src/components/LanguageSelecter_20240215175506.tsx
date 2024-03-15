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
    type: 'from'
    value: fromLanguage
    onChange: (language: Language) => void
  }

export const LanguageSelector: FC<Props> = ({ onChange }) => {
  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <FormSelect onChange={onChangeSelect} aria-label='Selecciona idioma'>
      {Object.entries(SUPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key}>{literal}</option>
      ))}
    </FormSelect>
  )
}
