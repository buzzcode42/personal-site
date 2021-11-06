import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Fernando dos Santos</title>
        <link rel="shortcut icon" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" href="/img/icon-576.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#161616" />
        <meta
          name="description"
          content="Meu site pessoal, para compartilhar conteúdo sobre Frontend, Viagens e algumas Filosofias de via!"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
