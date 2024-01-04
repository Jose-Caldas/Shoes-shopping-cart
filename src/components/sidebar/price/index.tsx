import React from 'react'
import * as S from '../category/styles'

type PriceProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

function Price({ handleChange }: PriceProps) {
  return (
    <S.Container>
      <S.Title>Price</S.Title>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="filter2" />
        <span className="checkmark"></span>All
      </label>
    </S.Container>
  )
}

export default Price
