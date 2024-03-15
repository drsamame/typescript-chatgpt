import { FormSelect } from 'react-bootstrap'
import { SUPORTED_LANGUAGES } from '../constant.d'
export function LanguageSelector({ onChange }) {
  const onChangeSelect = () => {}
  return (
    <FormSelect onChange={onChangeSelect} aria-label='Selecciona idioma'>
      {Object.entries(SUPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key}>{literal}</option>
      ))}
    </FormSelect>
  )
}
