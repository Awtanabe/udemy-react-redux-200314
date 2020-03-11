import { FETCH_POSTS }from '../actions'
import _ from 'lodash'

const initialState = {
  all: [],
  post: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, all: action.payload.data}
      // console.log(action.payload.data)
      // return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}