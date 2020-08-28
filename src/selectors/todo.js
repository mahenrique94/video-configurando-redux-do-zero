import { createSelector } from 'reselect'

const getTasks = createSelector(
  state => state.todoReducers.tasks,
  tasks => tasks,
)

const selectors = {
  getTasks,
}

export { selectors }
