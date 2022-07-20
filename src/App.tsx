import { ThemeProvider } from 'styled-components'
import { Router } from './pages/Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './contexts/CyclesContex'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
