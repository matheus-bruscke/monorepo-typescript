/** lib exports */
import { utils, themes, media, getTheme } from "./lib"

const lib = {
	utils,
	themes,
	media,
	getTheme,
}

/** base exports */
import { sizes, fontSizes, fontWeights, radius, spaces } from "./base"

const base = {
	sizes,
	fontSizes,
	fontWeights,
	radius,
	spaces,
}

/** colors exports */
import { mainColors, auxColors } from "./colors"

const colors = {
	main: mainColors,
	aux: auxColors,
}

/** exports */
export { lib, base, colors }
