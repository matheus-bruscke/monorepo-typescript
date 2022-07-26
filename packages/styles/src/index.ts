/** packages */
import { createStitches } from '@stitches/core'

/** lib exports */
import * as lib from './lib'

/** base exports */
import * as base from './base'

/** colors exports */
import * as colors from './colors'

/** main */
const { config, createTheme, css, getCssText, globalCss, keyframes, prefix, reset, theme } =
  createStitches({
    theme: lib.getTheme('dark'),
    utils: lib.utils,
    media: lib.media,
  })

/** exports */
export { config, createTheme, css, getCssText, globalCss, keyframes, prefix, reset, theme }
export { lib, base, colors }
export * as Styles from './types'
