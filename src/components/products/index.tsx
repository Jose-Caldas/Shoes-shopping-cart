import React from 'react'
import * as S from './styles'

type ProductsProps = {
  result: React.ReactNode
}
function Products({ result }: ProductsProps) {
  return (
    <S.Container className="animation-left">
      <S.Products>{result}</S.Products>
    </S.Container>
  )
}

export default Products
