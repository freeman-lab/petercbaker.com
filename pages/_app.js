import { useEffect } from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../theme'
import '../globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
