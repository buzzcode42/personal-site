import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { ButtonProps } from '.'

export type ButtonStyleProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

export const wrapperModifier = {
  small: (theme: DefaultTheme) => css`
    height: 2.5rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: () => css`
    padding: 0.7rem 1rem;
    height: 3.5rem;
    font-size: 0.9rem;
    background: rgba(193, 193, 193, 0.06);
  `,
  large: (theme: DefaultTheme) => css`
    padding: 1rem 1.2rem;
    height: 4.3rem;
    font-size: ${theme.font.sizes.medium};
    background-color: rgb(3, 168, 124);
  `,
  disabled: () => css`
    cursor: not-allowed;
    filter: saturate(30%);
  `,
  fullWidth: () => css`
    ${media.lessThan('medium')`
      width: 100%;
    `}
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<ButtonStyleProps>`
  ${({ theme, size, fullWidth, hasIcon, disabled }) => css`
    width: 14rem;
    border: none;
    outline: none;
    color: ${theme.colors.white};
    transition: background-color 0.3s ease-out;
    min-width: 122px;
    text-align: center;
    line-height: 40px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;

    ${!!size && wrapperModifier[size](theme)};
    ${!!fullWidth && wrapperModifier.fullWidth()};
    ${!!hasIcon && wrapperModifier.withIcon(theme)};
    ${!!disabled && wrapperModifier.disabled()};

    ${media.lessThan('medium')`
      width: 100%;
      margin-top: 0.3rem;
    `}
  `}
`
