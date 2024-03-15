import { FormSelect } from 'react-bootstrap'
import { SUPORTED_LANGUAGES } from '../constant.d'
export function LanguageSelector({ onChange }) {
  const onChangeSelect = (data) => {
    console.log(data)
  }
  return (
    <FormSelect onChange={onChangeSelect} aria-label='Selecciona idioma'>
      {SUPORTED_LANGUAGES.map((language) => (
        <option>{language}</option>
      ))}
    </FormSelect>
  )
}
