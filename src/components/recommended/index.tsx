import React from 'react'
import * as S from './styles'
import Button from '../button'

type RecommendedProps = {
  handleClick: (event: any) => void
}

function Recommended({ handleClick }: RecommendedProps) {
  return (
    <>
      <div>
        <S.RecommendedTitle>Recommended</S.RecommendedTitle>
        <S.RecommendedFlex>
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          <Button onClickHandler={handleClick} value="Others" title="Others" />
        </S.RecommendedFlex>
      </div>
    </>
  )
}

export default Recommended
