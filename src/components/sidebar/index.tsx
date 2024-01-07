import Category from './category'
import Colors from './colors'
import Price from './price'
import * as S from './styles'

type SidebarProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

function Sidebar({ handleChange }: SidebarProps) {
  return (
    <>
      <S.Sidebar>
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
