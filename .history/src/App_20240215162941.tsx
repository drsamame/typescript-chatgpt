import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelecter'
function App() {
  const { setFromLanguage, setToLanguage, fromLanguage, toLanguage, interChangeLanguage } = useStore()
  return (
    <Container fluid>
      <h1>Google translate</h1>
      <Row>
        <Col>
          <LanguageSelector onChange={setFromLanguage}/>
          {fromLanguage}
        </Col>
        <Col>
          <Button variant='link' onClick={() => interChangeLanguage()}><ArrowsIcon /></Button>
        </Col>
        <Col>
          <LanguageSelector onChange={setToLanguage}/>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
