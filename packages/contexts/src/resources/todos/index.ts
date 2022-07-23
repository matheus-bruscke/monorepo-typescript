/** packages */
import { action, computed, flow, makeAutoObservable, observable } from 'mobx'

/** types */
import { ToDo } from './types'

class TodosModel {
  data = [] as Array<Partial<ToDo>>

  constructor(initialValue: Array<Partial<ToDo>>) {
    this.data = initialValue

    makeAutoObservable(this, {
      data: observable,
      add: action,
      remove: action,
      toggle: action,
    })
  }

  getAll() {
    return this.data
  }

  set(data: Array<Partial<ToDo>>) {
    this.data = data
  }

  add(value: Partial<ToDo>) {
    this.data.push(value)
  }

  remove(id: string) {
    this.data = this.data.filter(todo => todo.id !== id)
  }

  toggle(id: string) {
    const updatedTodos = this.data.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    )

    this.data = updatedTodos
  }
}

/** exports */
export { TodosModel }
