import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelecter'
import { SectionType } from './types.d'
function App() {
  const {
    setFromLanguage,
    setToLanguage,
    fromLanguage,
    toLanguage,
    interChangeLanguage
  } = useStore()
  return (
    <Container fluid>
      <h1>Google translate</h1>
      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <Form.Control
            as='textarea'
            placeholder='Introducir texto'
            style={{ height: '150px' }}
          ></Form.Control>
        </Col>
        <Col>
          <Button variant='link' onClick={interChangeLanguage}>
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector
            value={toLanguage}
            type={SectionType.To}
            onChange={setToLanguage}
          />
          <Form.Control
            as='textarea'
            placeholder='Traducción'
            autofocus
            style={{ height: '150px' }}
          ></Form.Control>
        </Col>
      </Row>
    </Container>
  )
}

export default App
