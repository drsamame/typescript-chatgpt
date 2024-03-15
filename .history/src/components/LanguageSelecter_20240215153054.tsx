import { FormSelect } from 'react-bootstrap'
import { SUPORTED_LANGUAGES } from '../constant'
export function LanguageSelector({ onChange }) {
  const onChangeSelect = (data) => {
    console.log(data)
  }
  return (
    <FormSelect onChange={onChangeSelect} aria-label='Selecciona idioma'>
      <option>Open this select menu</option>
     { SUPORTED_LANGUAGES.map(language =>{
      return <option>language</option>
     }
    }
    </FormSelect>
  )
}
