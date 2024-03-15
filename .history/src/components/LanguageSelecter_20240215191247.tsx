import { FormSelect } from 'react-bootstrap'
import { SUPORTED_LANGUAGES } from '../constant.d'
import { type FC, type ChangeEvent } from 'react'
import { type FromLanguage, type Language, type SectionType } from '../types'

type Props =
  | {
    type: SectionType.From
    value: FromLanguage
    onChange: (language: FromLanguage) => void
  }
  | {
    type: SectionType.To
    value: Language
    onChange: (language: Language) => void
  }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <FormSelect onChange={onChangeSelect} aria-label='Selecciona idioma' value={value}>
       {type === 'from' && <option>Detectar Idioma</option>}
      {Object.entries(SUPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key}>{literal}</option>
      ))}
    </FormSelect>
  )
}
