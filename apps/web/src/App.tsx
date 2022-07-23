/** types */
import { TodosModel } from '@app/contexts'
import { Component, For } from 'solid-js'

/** render */
const App: Component = () => {
  const todo = new TodosModel([
    { id: '1', title: 'learn js', completed: false },
  ])

  return (
    <div>
      <For each={todo.data} fallback={<div>Loading...</div>}>
        {({ id, title, completed }) => (
          <div style={{ display: 'flex', 'align-items': 'center', gap: '5px' }}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => todo.toggle(String(id))}
            />
            <p>
              {id}-{title} "|" {completed ? 'completed' : 'not completed'}
            </p>

            <button onClick={() => todo.remove(String(id))}>remove</button>
          </div>
        )}
      </For>

      <button
        onClick={() =>
          todo.add({
            id: String(todo.data.length + 1),
            title: `new todo ${todo.data.length + 1}`,
            completed: false,
          })
        }
      >
        Add
      </button>
    </div>
  )
}

/** exports */
export default App
