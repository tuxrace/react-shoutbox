import firebase from 'firebase'
import { SHOUTS, USERS, TYPED_MESSAGE,
  REMAINING_CHARS, UPDATE, SET_ACTIVE, SET_USER,
SELECTED_SHOUTS, SELECTED_USER } from '../types/index'
const serverapi = 'https://shoutbox.mybluemix.net'
var config = {
  apiKey: 'AIzaSyBOM9ePkyA10zmtbPxRe3MlojcaAG-pJ6c',
  authDomain: 'shoutbox-12210.firebaseapp.com',
  databaseURL: 'https://shoutbox-12210.firebaseio.com',
  storageBucket: 'shoutbox-12210.appspot.com',
  messagingSenderId: '787177898743'
}
firebase.initializeApp(config)

const database = firebase.database()

export const add = data => (dispatch, getState) => {
  const { user, message } = data
  fetch(`${serverapi}/api/addshout?user=${user}&shout=${message}`)
    .then(r => console.log(r))
  fetch(`${serverapi}/api/posts`)
    .then(r => r.json())
    .then(r => {
      var n = r.filter(x => x.user === user)
      dispatch({ type: SHOUTS, data: n })
    })
}

export const handleMessage = data => (dispatch, getState) => {
  dispatch({ type: TYPED_MESSAGE, data })
  dispatch({ type: REMAINING_CHARS, data: 32 - data.length })
}

export const del = data => (dispatch, getState) => {
  const { main } = getState()
  console.log(main.user)
  fetch(`${serverapi}/api/delete?id=${data}`)
  // dispatch({ type: 'DELETE', data })
  fetch(`${serverapi}/api/posts`)
    .then(r => r.json())
    .then(r => {
      var n = r.filter(x => x.user === main.user)
      dispatch({ type: SHOUTS, data: n })
    })
}

export const loadshouts = data => (dispatch, getState) => {
  fetch(`${serverapi}/api/posts`)
    .then(r => r.json())
    .then(r => {
      var n = r.filter(x => x.user === data)
      dispatch({ type: SHOUTS, data: n })
    })
}

export const loadusers = data => (dispatch, getState) => {
  fetch(`${serverapi}/api/users`)
    .then(r => r.json())
    .then(r => {
      dispatch({ type: USERS, data: r })
    })
}

export const update = data => (dispatch, getState) => {
  fetch(`${serverapi}/api/update/${data.active}?data=${data.message}`)
  dispatch({ type: UPDATE, data })
}

export const setactive = data => {
  return { type: SET_ACTIVE, data }
}

export const setuser = data => (dispatch, getState) => {
  const { main } = getState()
  fetch(`${serverapi}/api/user/${main.user}`)
    .then(r => r.json())
    .then(([r]) => dispatch({ type: SET_USER, data: { userInfo: r } }))
}

export const selecteduser = data => {
  return { type: SELECTED_USER, data: { selecteduser: data } }
}

export const loadselectedposts = data => (dispatch, getState) => {
  database.ref('posts/').orderByChild('date').on('value', snapshot => {
    var newList = []
    snapshot.forEach(c => {
      newList.push(c.val())
      const n = newList.filter(x => x.user === data)
      dispatch({ type: SELECTED_SHOUTS, data: n.reverse() })
    })
  })
  /*
  fetch(`${serverapi}/api/posts`)
    .then(r => r.json())
    .then(r => {
      const n = r.filter(x => x.user === data)
      dispatch({ type: 'SELECTED_SHOUTS', data: n })
    })
  */
}
