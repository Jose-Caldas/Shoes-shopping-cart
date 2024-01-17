import ProductlDetail from './items/productDetail'
import ProductInfo from './items/productInfo'

const accordionItems = [
  {
    id: 1,
    title: <h2>Product Information</h2>,
    content: <ProductInfo />,
  },
  {
    id: 2,
    title: <h2>Technical Details</h2>,
    content: <ProductlDetail />,
  },
]

export default accordionItems
