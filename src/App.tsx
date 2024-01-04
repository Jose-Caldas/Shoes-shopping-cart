import Navigation from './components/navigation'
import Products from './components/products'
import Sidebar from './components/sidebar'

function App() {
  const handleChange = () => {}

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation />
      <Products />
    </>
  )
}

export default App
