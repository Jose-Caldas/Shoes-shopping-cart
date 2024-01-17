import { useState } from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import data from './data'
import * as S from './styles'

function Accordion() {
  const [clicked, setClicked] = useState<null | boolean | number>(false)

  const toggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <S.AccordionSection>
      {data.map((item, index) => (
        <S.Container key={item.id}>
          <S.CustomButton onClick={() => toggle(index)}>
            {item.title}
            <span>
              {clicked === index ? (
                <FiChevronUp size={25} />
              ) : (
                <FiChevronDown size={25} />
              )}
            </span>
          </S.CustomButton>
          {clicked === index ? (
            <S.Dropdown
              className={`dropdown ${
                clicked === index ? 'active' : 'inactive'
              }`}
            >
              {item.content}
            </S.Dropdown>
          ) : null}
        </S.Container>
      ))}
    </S.AccordionSection>
  )
}

export default Accordion
