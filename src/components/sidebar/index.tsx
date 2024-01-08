import Category from './category'
import Colors from './colors'
import Price from './price'
import * as S from './styles'
import { useAppSelector } from '../../app/hooks'

type SidebarProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

function Sidebar({ handleChange }: SidebarProps) {
  const { isVisible } = useAppSelector((state) => state.filter)

  return (
    <>
      <S.Sidebar visible={isVisible}>
        <S.FilterContainer>
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </S.FilterContainer>
      </S.Sidebar>
    </>
  )
}

export default Sidebar
