import Navigation from './components/navigation'
import Sidebar from './components/sidebar'

function App() {
  const handleChange = () => {}

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation />
    </>
  )
}

export default App
