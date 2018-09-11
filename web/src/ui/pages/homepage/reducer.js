import TYPES from './types'

export const initialState = {
  messageOfTheDay: '',
}

const loadDailyMessage = (state, { message }) => ({
  ...state,
  messageOfTheDay: message
})

const handlers = {
  [TYPES.FETCH_DAILY_MESSAGE_SUCCESS]: loadDailyMessage
}

export default function(state = initialState, action = {}) {
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'homepage',
  select(state) {
    return state.homepage
  }
}
