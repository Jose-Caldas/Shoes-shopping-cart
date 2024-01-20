import React from 'react'
import { Collapse } from 'react-collapse'
import { FiChevronDown } from 'react-icons/fi'
import * as S from './styles'

interface AccordionItemProps {
  title: string
  content: React.ReactNode
  open: boolean
  toggle: () => void
}

function AccordionItem({ open, title, content, toggle }: AccordionItemProps) {
  return (
    <S.Container>
      <S.CustomButton onClick={toggle}>
        <p>{title}</p>
        <span>
          <FiChevronDown
            size={25}
            className={`${open ? 'icon-up' : 'icon-down'}`}
          />
        </span>
      </S.CustomButton>

      <Collapse id="test" isOpened={open}>
        {content}
      </Collapse>
    </S.Container>
  )
}

export default AccordionItem
