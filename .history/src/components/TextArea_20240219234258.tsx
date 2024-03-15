import { Form } from 'react-bootstrap'

export const TextArea = ({ loading, type, value, onChange }) => {
  return (
    <Form.Control
      as='textarea'
      placeholder='Introducir texto'
      style={{ height: '150px' }}
    ></Form.Control>
  )
}
