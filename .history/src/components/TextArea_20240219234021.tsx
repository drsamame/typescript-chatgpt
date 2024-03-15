import { Form } from 'react-bootstrap'

export const TextArea = function() => {
    return (
        <Form.Control
        as='textarea'
        autoFocus
        placeholder='Introducir texto'
        style={{ height: '150px' }}
      ></Form.Control>
    )
}