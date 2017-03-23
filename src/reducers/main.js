import { AUTH_SUCCESS, AUTH_FAILURE, SHOUTS, USERS, TYPED_MESSAGE,
  REMAINING_CHARS, UPDATE, SET_ACTIVE, SET_USER,
SELECTED_SHOUTS, SELECTED_USER } from '../types/index'

const getStorage = data => {
  if (localStorage.auto) {
    const storage = JSON.parse(localStorage.getItem('auto'))
    return storage[data]
  }
}
const initialState = {
  auth: getStorage('auth'),
  user: getStorage('user'),
  posts: [],
  selected_posts: [],
  message: null,
  shoutinfo: null,
  active: null,
  remaining: 32,
  selecteduser: getStorage('selecteduser'),
  userInfo: {follows: {names: []}}
}

export const main = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return Object.assign({}, state, action.data)
    case AUTH_FAILURE:
      return Object.assign({}, state, action.data)
    case SHOUTS:
      return Object.assign({}, state, { posts: action.data })
    case USERS:
      return Object.assign({}, state, { allusers: action.data })
    case TYPED_MESSAGE:
      return Object.assign({}, state, { message: action.data })
    case REMAINING_CHARS:
      return Object.assign({}, state, { remaining: action.data })
    case UPDATE:
      return Object.assign({}, state,
        { posts: state.posts.map(x => x.postId === action.data.active ? Object.assign(x, { shout: action.data.message }) : x) })
    case SET_ACTIVE:
      return Object.assign({}, state, { active: action.data })
    case SET_USER:
      return Object.assign({}, state, action.data)
    case SELECTED_USER:
      return Object.assign({}, state, action.data)
    case SELECTED_SHOUTS:
      return Object.assign({}, state, { selected_posts: action.data })
    default:
      return state
  }
}
