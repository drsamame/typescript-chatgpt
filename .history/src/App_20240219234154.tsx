import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelecter'
import { TextArea } from './components/TextArea'
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
      <h2>Google translate</h2>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea />
          </Stack>
        </Col>
        <Col xs='auto'>
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
          <TextArea />
        </Col>
      </Row>
    </Container>
  )
}

export default App
