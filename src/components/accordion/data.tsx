import ProductlDetail from './items/productDetail'
import ProductInfo from './items/productInfo'

const accordionData = [
  {
    id: 1,
    title: 'Product Information',
    content: <ProductInfo />,
  },
  {
    id: 2,
    title: 'Technical Details',
    content: <ProductlDetail />,
  },
]

export default accordionData
