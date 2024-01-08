import * as S from './styles'
import Button from '../button'
import { useAppDispatch } from '../../app/hooks'
import { openFilter } from '../../features/filter/filterSlice'

type RecommendedProps = {
  handleClick: (event: any) => void
}

function Recommended({ handleClick }: RecommendedProps) {
  const dispatch = useAppDispatch()

  function handleOpenFilter() {
    dispatch(openFilter())
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
            onClickHandler={handleOpenFilter}
            value="Others"
            title="Other Filters"
          />
        </S.RecommendedFlex>
      </S.Container>
    </>
  )
}

export default Recommended
