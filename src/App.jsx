import Header from './components/Header'
import Main from './components/Main'
function App() {
  const api = import.meta.env.VITE_API_KEY
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
