const date = new Date()

const initialState = {
  auth: false,
  user: 'm@mail.com',
  allusers: [
    'q@mail.com', 'a@mail.com', 'z@mail.com'
  ],
  posts: [],
  message: null,
  shoutinfo: null,
  active: null,
  remaining:32
}

export const main = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_OK':
      return Object.assign({}, state, action.data)
    case 'AUTH_NOT':
      return Object.assign({}, state, action.data)
    case 'SHOUTS':
      return Object.assign({}, state, {posts: action.data})
    case 'USERS':
      return Object.assign({}, state, {allusers: action.data})
    case 'NEW':
      return Object.assign({}, state, {message: action.data})
    case 'REMAINING':
      return Object.assign({}, state, {remaining: action.data})
    case 'SAVE':
      return Object.assign({}, state, {posts: state.posts.concat(
        {shout: action.data, user: state.user, date}
        )})
    case 'DELETE':
      return Object.assign({}, state, {posts: state.posts.filter(x => x.postId !== action.data)})
    case 'UPDATE':
      return Object.assign({}, state, 
      {posts: state.posts.map(x => x.postId === action.data.active ? Object.assign(x, {shout: action.data.message}) : x) })
    case 'SET_ACTIVE':
      return Object.assign({}, state, {active: action.data})
    default:
      return state
  }
}
