/** packages */
import { render } from 'solid-js/web'
import { enableExternalSource } from 'solid-js'
import { storeReaction } from '@app/contexts'

/** compose */
import App from './App'

let id = 0
enableExternalSource((fn, trigger) => {
  const reaction = storeReaction({ label: `externalSource@${++id}`, trigger })

  return {
    track: x => {
      let next
      reaction.track(() => (next = fn(x)))
      return next
    },
    dispose: () => {
      reaction.dispose()
    },
  }
})

/** render */
render(() => <App />, document.getElementById('root') as HTMLElement)
