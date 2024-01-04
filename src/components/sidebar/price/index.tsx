import React from 'react'
import * as S from '../category/styles'
import Input from '../../input'

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

      <Input
        handleChange={handleChange}
        value={'50'}
        title="$0 - 50"
        name="filter2"
      />

      <Input
        handleChange={handleChange}
        value={'100'}
        title="$50 - $100"
        name="filter2"
      />

      <Input
        handleChange={handleChange}
        value={'150'}
        title="$100 - $150"
        name="filter2"
      />

      <Input
        handleChange={handleChange}
        value={'200'}
        title="Over $150"
        name="filter2"
      />
    </S.Container>
  )
}

export default Price
