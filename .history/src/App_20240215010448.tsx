import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useStore } from './hooks/useStore'
function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    isLoading,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
    interChangeLanguage
  } = useStore()
  return (
    <>
      <h1>Google translate</h1>
      <button
        onClick={() => setFromLanguage('es')}
      >
        Cambiar a español { fromLanguage}
      </button>
    </>
  )
}

export default App
