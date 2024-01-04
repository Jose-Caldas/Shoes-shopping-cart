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
        <S.LogoContainer>
          <h1 className="sidebar-title">🛒</h1>
        </S.LogoContainer>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </S.Sidebar>
    </>
  )
}

export default Sidebar
