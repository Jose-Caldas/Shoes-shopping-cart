import { SetStateAction, useState } from 'react'
import Navigation from './components/navigation'
import Sidebar from './components/sidebar'
import Recommended from './components/recommended'
import Products from './components/products'
import products from './data/products'
import Card from './components/Card'
import { IProduct } from './interface'

function App() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null || String)

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )

  const handleChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSelectedCategory(event.target.value)
  }

  const handleClick = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products: IProduct[], selected: string, query: string) {
    let filteredProducts = products

    if (query) {
      filteredProducts = filteredItems
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          String(newPrice) === selected ||
          title === selected
      )
    }

    return filteredProducts.map((product) => (
      <Card key={product.id} product={product} />
    ))
  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  )
}

export default App
