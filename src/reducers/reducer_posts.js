import { FETCH_POSTS, FETCH_POST }from '../actions'
import _ from 'lodash'

const initialState = {
  all: [],
  post: null
}

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data
      // const newState = { ...state}
      // newState[post.id] = post
      // return newState
      return {...state, [action.payload.data.id]: action.payload.data }
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
      // return {...state, all: action.payload.data}
      // console.log(action.payload.data)
    
    default:
      return state
  }
}