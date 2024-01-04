import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  onClickHandler: (event: React.MouseEvent<HTMLElement>) => void

  title: string
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({ onClickHandler, value, title, ...rest }: ButtonProps) {
  return (
    <S.CustomButtom
      onClick={onClickHandler}
      value={value}
      className="btns"
      {...rest}
    >
      {title}
    </S.CustomButtom>
  )
}

export default Button
