/* eslint-disable @typescript-eslint/no-explicit-any */
/** pacakges */
import { Stitches } from '@app/styles'

/** types */
type DefaultProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  className?: string
  class?: string
  style?: React.CSSProperties
  children?: any
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  css?: Stitches.CSS
}

/** exports */
export type { DefaultProps }
