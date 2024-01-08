import React from 'react'
import * as S from './styles'
import Input from '../../input'
import { useAppDispatch } from '../../../app/hooks'
import { closeFilter } from '../../../features/filter/filterSlice'

type CategoryProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

function Category({ handleChange }: CategoryProps) {
  const dispatch = useAppDispatch()

  function handleCloseFilter() {
    dispatch(closeFilter())
  }

  return (
    <S.Container>
      <S.CategoryHeader>
        <S.Title className="sidebar-title">Category</S.Title>
        <button onClick={handleCloseFilter}>Apply Filter</button>
      </S.CategoryHeader>

      <>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="filter1" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="filter1"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="filter1"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="filter1"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="filter1"
        />
      </>
    </S.Container>
  )
}

export default Category
