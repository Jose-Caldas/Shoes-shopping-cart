import { useState } from 'react'
import accordionData from './data'
import * as S from './styles'
import AccordionItem from './accordionItem'

function Accordion() {
  const [open, setOpen] = useState<any>(false)

  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  return (
    <S.AccordionSection className="animation-left">
      <S.Container>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            content={item.content}
            open={open === index}
            toggle={() => toggle(index)}
          />
        ))}
      </S.Container>
    </S.AccordionSection>
  )
}

export default Accordion
