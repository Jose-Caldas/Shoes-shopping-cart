import React from 'react'
import * as S from './styles'

type CategoryProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

function Category({ handleChange }: CategoryProps) {
  return (
    <S.Container>
      <S.Title className="sidebar-title">Category</S.Title>

      <>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="filter1" />
          <span className="checkmark"></span>All
        </label>
      </>
    </S.Container>
  )
}

export default Category
