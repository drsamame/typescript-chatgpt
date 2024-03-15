import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelecter'
import { TextArea } from './components/TextArea'
import { SectionType } from './types.d'
import { useEffect } from 'react'
import { translate } from './services/transale'
function App() {
  const {
    setFromLanguage,
    setToLanguage,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    interChangeLanguage,
    setFromText,
    setResult
  } = useStore()

  useEffect(() => {
    translate({ fromLanguage, toLanguage, text: fromText }).then((result) => {
      if (result == null) return
      setResult(result)
    }).catch(() => { setResult('Error') })
  }, [fromText, fromLanguage, toLanguage])
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
            <TextArea
              value={fromText}
              type={SectionType.From}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' onClick={interChangeLanguage}>
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              value={toLanguage}
              type={SectionType.To}
              onChange={setToLanguage}
            />
            <TextArea
              value={result}
              onChange={setResult}
              type={SectionType.To}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
