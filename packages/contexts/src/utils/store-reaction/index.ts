/** packages */
import { Reaction } from 'mobx'

/** types */
import { StoreReactionProps } from './types'

/** executable */
function storeReaction({ label, trigger }: StoreReactionProps) {
  const reaction = new Reaction(label, trigger)

  return reaction
}

/** exports */
export { storeReaction }
