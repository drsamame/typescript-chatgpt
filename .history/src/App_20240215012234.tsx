import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
import { Container, Row, Col } from 'react-bootstrap'
function App() {
  const { setFromLanguage, fromLanguage } = useStore()
  return (
    <Container fluid>
      <h1>Google translate</h1>
      <button onClick={() => setFromLanguage('es')}>
        Cambiar a español {fromLanguage}
      </button>
    </Container>
  )
}

export default App
