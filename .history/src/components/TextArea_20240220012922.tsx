import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  placeholder: string
  loading?: boolean
  type: SectionType
  value: string
  onChange: (value: string) => void
}

const commonStyles = { height: '150px' }

export const TextArea = ({ placeholder, loading, value, type, onChange }: Props) => {
  return (
    <Form.Control
      as='textarea'
      autoFocus={type === SectionType.From}
      placeholder={placeholder}
      style={commonStyles}
    ></Form.Control>
  )
}
