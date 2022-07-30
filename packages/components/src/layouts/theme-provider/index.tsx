/** compose */
import { globalStyles } from './styles'
import { ThemeProviderProps } from './types'

/** main */
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  globalStyles()

  /** render JSX */
  return children
}

/** exports */
export { ThemeProvider }
