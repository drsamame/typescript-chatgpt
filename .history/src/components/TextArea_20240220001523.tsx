import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  placeholder: string
  loading?: boolean
  type: SectionType
  value: string
  onChange: (value: string) => void
}

export const TextArea = ({ placeholder, loading, value, type, onChange }: Props) => {
  return (
    <Form.Control
      as='textarea'
      autoFocus={type === SectionType.From}
      placeholder='Introducir texto'
      style={{ height: '150px' }}
    ></Form.Control>
  )
}
