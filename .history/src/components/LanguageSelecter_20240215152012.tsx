import { FormSelect } from 'react-bootstrap'
import { SUPORTED_LANGUAGES } from '../constant'
export function LanguageSelector({ onChange }) {
  const onChangeSelect = (data) => {
    console.log(data)
  }
  return (
    <FormSelect onChange={onChangeSelect} aria-label='Default select example'>
      <option>Open this select menu</option>
      <option value='1'>One</option>
      <option value='2'>Two</option>
      <option value='3'>Three</option>
    </FormSelect>
  )
}
