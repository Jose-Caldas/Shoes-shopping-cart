import React from 'react'
import * as S from '../category/styles'

type ColorsProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

function Colors({ handleChange }: ColorsProps) {
  return (
    <S.Container>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="filter3" />
        <span className="checkmark all"></span>
        All
      </label>

      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value="white"
          name="filter3"
        />
        <span className="checkmark" style={{ background: '#eee' }}></span>
        White
      </label>
    </S.Container>
  )
}

export default Colors
