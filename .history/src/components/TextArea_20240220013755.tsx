import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  loading?: boolean
  type: SectionType
  value: string
  onChange: (value: string) => void
}

const commonStyles = { height: '150px' }

const getPlaceholder = ({
  type,
  loading
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.From) return 'Introducir Texto'
  if (loading === true) return 'Cargando...'
  return 'Traduccion...'
}

export const TextArea = ({
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
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
    ></Form.Control>
  )
}
