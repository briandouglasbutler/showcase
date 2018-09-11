import { call, put, takeLatest } from 'redux-saga/effects'

import * as api from './api'
import TYPES from './types'

export const name = 'homepageActions'

export function fetchDailyMessage(amount) {
  return {
    type: TYPES.FETCH_DAILY_MESSAGE_REQUEST
  }
}

export function* executeFetchDailyMessage() {
  const url = api.fetch.formatUrl()
  try {
    const res = yield call(api.fetch.request, url)
    yield put(fetchSuccess(res.data.message))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchSuccess({ dailyMessage }) {
  return {
    type: TYPES.FETCH_DAILY_MESSAGE_SUCCESS,
    message: dailyMessage
  }
}
const sagas = [
  takeLatest(TYPES.FETCH_DAILY_MESSAGE_REQUEST, executeFetchDailyMessage)
]

export default sagas
