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
  size?: 'small' | 'medium' | 'large'
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.ButtonStyleProps, ButtonProps> =
  ({ children, size = 'medium', fullWidth = 'false', icon, ...props }, ref) => (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      ref={ref}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )

export default forwardRef(Button)
