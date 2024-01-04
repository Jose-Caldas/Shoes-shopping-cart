import React from 'react'
import * as S from '../category/styles'
import Input from '../../input'

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

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="filter3"
        color="black"
      />

      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="filter3"
        color="blue"
      />

      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="filter3"
        color="red"
      />

      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="filter3"
        color="green"
      />

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
