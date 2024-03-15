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

export const TextArea = ({
  placeholder,
  loading,
  value,
  type,
  onChange
}: Props) => {
  const styles =
    type === SectionType.From
      ? { ...commonStyles }
      : { ...commonStyles, backgroundColor: '#f5f5f5' }
  return (
    <Form.Control
      as='textarea'
      autoFocus={type === SectionType.From}
      placeholder={placeholder}
      style={styles}
    ></Form.Control>
  )
}
