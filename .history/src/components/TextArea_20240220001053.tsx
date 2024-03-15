import { Form } from 'react-bootstrap'

interface Props {
  autoFocus: boolean
  placeholder: string
  loading: boolean
  value: string
  onChange: (value: string) => void
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
