/** types */
import { TextProps } from './types'

/** styles */
import * as s from './styles'

/** main */
function Text(props: TextProps) {
  /** render */
  return (
    <p className={s.wrapper({ ...props })} {...props}>
      {props.children}
    </p>
  )
}

/** exports */
export { Text }
