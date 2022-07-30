/** compose */
import { stitches } from '@app/styles'

/** main */
const globalStyles = stitches.globalCss({
  '@import': 'url("https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap")',

  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',

    fontFamily: 'Inter, sans-serif, Arial, -apple-system, sans-serif',
    color: '$text',
  },

  '@media (max-width: 1024px)': {
    html: {
      fontSize: '93.75%',
    },
  },

  '@media (max-width: 768px)': {
    html: {
      fontSize: '87.5%',
    },
  },

  button: {
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
})

/** exports */
export { globalStyles }
