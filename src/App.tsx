import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { ArrowsIcon, SpeakerIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelecter'
import { TextArea } from './components/TextArea'
import { SectionType } from './types.d'
import { useEffect } from 'react'
import { translate } from './services/transale'
import { useDebounce } from './hooks/useDebounce'
import { VOICE_FOR_LANGUAGE } from './constant.d'
function App() {
  const {
    setFromLanguage,
    setToLanguage,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    isLoading,
    interChangeLanguage,
    setFromText,
    setResult
  } = useStore()

  const debouncedFromText = useDebounce(fromText, 250)

  useEffect(() => {
    if (debouncedFromText === '') return
    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then((result) => {
        if (result == null) return

        setResult(result)
      })
      .catch(() => {
        setResult('Error')
      })
  }, [debouncedFromText, fromLanguage, toLanguage])

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICE_FOR_LANGUAGE[toLanguage]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

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
            <div style={{ position: 'relative' }}>
            <TextArea
              value={fromText}
              type={SectionType.From}
              onChange={setFromText}
            />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  display: 'flex'
                }}
              >
                <Button style={{ position: 'absolute', left: 0, bottom: 0, display: 'flex' }} variant='link' onClick={handleSpeak}>
                  <SpeakerIcon />
                </Button>
              </div>
            </div>

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
              loading={isLoading}
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
