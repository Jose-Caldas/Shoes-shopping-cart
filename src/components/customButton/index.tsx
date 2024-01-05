import { ButtonHTMLAttributes } from 'react'
import * as Styles from './styles'

export type CustomButtonProps = {
  children: React.ReactNode
  startIcon: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const CustomButton = ({ children, startIcon, ...rest }: CustomButtonProps) => {
  return (
    <Styles.CustomButtonContainer {...rest}>
      {startIcon && <Styles.IconContainer>{startIcon}</Styles.IconContainer>}

      {children}
    </Styles.CustomButtonContainer>
  )
}

export default CustomButton
