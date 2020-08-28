import { combineReducers } from 'redux'

import { reducers as todoReducers } from './todo'

const reducers = combineReducers({
  todoReducers,
})

export { reducers }
