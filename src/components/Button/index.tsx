import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
  fullWidth?: boolean
  icon?: JSX.Element
  minimal?: boolean
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: 'red' | 'secondary' | 'primary'
  color?: 'white' | 'black'
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.ButtonStyledProps, ButtonProps> =
  (
    {
      children,
      fullWidth = false,
      icon,
      minimal = false,
      size = 'medium',
      color = 'dark',
      backgroundColor = 'red',
      ...props
    },
    ref
  ) => (
    <S.Wrapper
      backgroundColor={backgroundColor}
      size={size}
      minimal={minimal}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      color={color}
      ref={ref}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )

export default forwardRef(Button)
