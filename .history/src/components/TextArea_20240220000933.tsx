import { Form } from 'react-bootstrap'
import { type SectionType } from '../types.d'

interface Props {
  type: SectionType.From
  value: FromLanguage
  onChange: (language: FromLanguage) => void
}

export const TextArea = ({ autoFocus, placeholder, loading, value, onChange } : Props) => {
  return (
    <Form.Control
      as='textarea'
      autoFocus={autoFocus}
      placeholder='Introducir texto'
      style={{ height: '150px' }}
    ></Form.Control>
  )
}
