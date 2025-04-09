import Header from './components/header'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section>
        <Header />
      </section >
    </ThemeProvider>
  )
}

export default App
