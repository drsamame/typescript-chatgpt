import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowsIcon } from './components/Icons'
function App() {
  const { setFromLanguage, fromLanguage, toLanguage, interChangeLanguage } = useStore()
  return (
    <Container fluid>
      <h1>Google translate</h1>
      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>
        <Col>
          <Button onClick={() => interChangeLanguage()}><ArrowsIcon /></Button>
        </Col>
        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
