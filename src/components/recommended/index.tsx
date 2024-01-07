import React, { useState } from 'react'
import * as S from './styles'
import Button from '../button'

type RecommendedProps = {
  handleClick: (event: any) => void
}

function Recommended({ handleClick }: RecommendedProps) {
  const [showFilter, setShowFilter] = useState(false)

  function handleFilterButton() {
    setShowFilter(true)
  }

  return (
    <>
      <S.Container>
        <S.RecommendedTitle>Recommended</S.RecommendedTitle>
        <S.RecommendedFlex>
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          <Button onClickHandler={handleClick} value="Others" title="Others" />
          <Button
            onClickHandler={handleFilterButton}
            value="Others"
            title="Other Filters"
          />
        </S.RecommendedFlex>
        {showFilter && (
          <S.ModalContainer>
            <p>Category</p>
            <p>Price</p>
            <p>Colors</p>
            <button onClick={() => setShowFilter(false)}>Close</button>
          </S.ModalContainer>
        )}
      </S.Container>
    </>
  )
}

export default Recommended
