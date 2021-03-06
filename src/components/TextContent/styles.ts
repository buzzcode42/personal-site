import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      color: ${theme.colors.white};
    `}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.white};
      margin: ${theme.spacings.xxsmall} 0;
      font-weight: ${theme.font.bold};

      ${media.greaterThan('medium')`
        color: ${theme.colors.white};
      `}
    }

    h1 {
      font-size: ${theme.font.sizes.xxlarge};
    }

    h2 {
      font-size: ${theme.font.sizes.xlarge};
      ${media.lessThan('medium')`
        text-align: center;
      `}
    }

    p {
      margin-bottom: ${theme.spacings.xsmall};

      ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.small};
        text-align: center;
      `}
    }

    a {
      color: ${theme.colors.primary};
    }

    img,
    video {
      max-width: min(70rem, 100%);
      margin-bottom: ${theme.spacings.xsmall};
    }

    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }

    hr {
      margin: ${theme.spacings.small} 0;
    }
  `}
`
