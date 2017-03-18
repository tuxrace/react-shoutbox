const date = new Date()
const getStorage = data => {
  if (window.localStorage.auto) {
    const { user, auth } = JSON.parse(localStorage.getItem('auto'))
    switch (data) {
      case 'user':
        return user
      case 'auth':
        return auth
      default:
        return null
    }
  }
}
const initialState = {
  auth: getStorage('auth'),
  user: getStorage('user'),
  allusers: [
    'q@mail.com', 'a@mail.com', 'z@mail.com'
  ],
  posts: [],
  message: null,
  shoutinfo: null,
  active: null,
  remaining: 32,
  userInfo: {}
}

export const main = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, action.data)
    case 'AUTH_FAILURE':
      return Object.assign({}, state, action.data)
    case 'SHOUTS':
      return Object.assign({}, state, { posts: action.data })
    case 'USERS':
      return Object.assign({}, state, { allusers: action.data })
    case 'NEW':
      return Object.assign({}, state, { message: action.data })
    case 'REMAINING':
      return Object.assign({}, state, { remaining: action.data })
    case 'SAVE':
      return Object.assign({}, state, {
        posts: state.posts.concat(
          { shout: action.data, user: state.user, date }
        )
      })
    case 'DELETE':
      return Object.assign({}, state, { posts: state.posts.filter(x => x.postId !== action.data) })
    case 'UPDATE':
      return Object.assign({}, state,
        { posts: state.posts.map(x => x.postId === action.data.active ? Object.assign(x, { shout: action.data.message }) : x) })
    case 'SET_ACTIVE':
      return Object.assign({}, state, { active: action.data })
    case 'SET_USER':
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}
