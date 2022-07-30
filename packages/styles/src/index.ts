/** packages */
import { createStitches } from "@stitches/core"

/** compose */
import { lib } from "./config"

/** main */
const stitches = createStitches({
	theme: lib.getTheme("dark"),
	utils: lib.utils,
	media: lib.media,
})

/** exports */
export { stitches }
export * as config from "./config"
export * as Stitches from "./types"