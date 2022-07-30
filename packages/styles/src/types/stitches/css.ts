/** packages */
import { CSS as StitchesCSS } from "@stitches/core"

/** compose */
import { stitches } from "../../"

/** types */
type CSS = StitchesCSS<typeof stitches.config>

/** exports */
export type { CSS }