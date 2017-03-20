import firebase from 'firebase'

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
  fetch(`http://${location.hostname}:3000/api/addshout?user=${user}&shout=${message}`)
    .then(r => console.log(r))
  // dispatch({ type: 'SAVE', data: message })
  fetch(`http://${window.location.hostname}:3000/api/posts`)
    .then(r => r.json())
    .then(r => {
      var n = r.filter(x => x.user === user)
      dispatch({ type: 'SHOUTS', data: n })
    })
}

export const handleMessage = data => (dispatch, getState) => {
  dispatch({ type: 'NEW', data })
  dispatch({ type: 'REMAINING', data: 32 - data.length })
}

export const del = data => (dispatch, getState) => {
  const { main } = getState()
  console.log(main.user)
  fetch(`http://${window.location.hostname}:3000/api/delete?id=${data}`)
  // dispatch({ type: 'DELETE', data })
  fetch(`http://${window.location.hostname}:3000/api/posts`)
    .then(r => r.json())
    .then(r => {
      var n = r.filter(x => x.user === main.user)
      dispatch({ type: 'SHOUTS', data: n })
    })
}

export const loadshouts = data => (dispatch, getState) => {
  fetch(`http://${window.location.hostname}:3000/api/posts`)
    .then(r => r.json())
    .then(r => {
      var n = r.filter(x => x.user === data)
      dispatch({ type: 'SHOUTS', data: n })
    })
}

export const loadusers = data => (dispatch, getState) => {
  fetch(`http://${window.location.hostname}:3000/api/users`)
    .then(r => r.json())
    .then(r => {
      dispatch({ type: 'USERS', data: r })
    })
}

export const shoutinfo = data => (dispatch, getState) => {
  fetch(`http://${window.location.hostname}:3000/api/posts/${data}`)
    .then(r => r.json())
    .then(r => {
      dispatch({ type: 'INFO', data: r })
    })
}

export const update = data => (dispatch, getState) => {
  fetch(`http://${window.location.hostname}:3000/api/update/${data.active}?data=${data.message}`)
  dispatch({ type: 'UPDATE', data })
}

export const setactive = data => (dispatch, getState) => {
  dispatch({ type: 'SET_ACTIVE', data })
}

export const setuser = data => (dispatch, getState) => {
  const { main } = getState()
  fetch(`http://${window.location.hostname}:3000/api/user/${main.user}`)
    .then(r => r.json())
    .then(([r]) => dispatch({ type: 'SET_USER', data: { userInfo: r } }))
}

export const selecteduser = data => (dispatch, getState) => {
  dispatch({ type: 'SELECTED_USER', data: { selecteduser: data } })
}

export const loadselectedposts = data => (dispatch, getState) => {
  database.ref('posts/').orderByChild('date').on('value', snapshot => {
    var newList = []
    snapshot.forEach(c => {
      newList.push(c.val())
      const n = newList.filter(x => x.user === data)
      dispatch({ type: 'SELECTED_SHOUTS', data: n.reverse() })
    })
  })
  /*
  fetch(`http://${window.location.hostname}:3000/api/posts`)
    .then(r => r.json())
    .then(r => {
      const n = r.filter(x => x.user === data)
      dispatch({ type: 'SELECTED_SHOUTS', data: n })
    })
  */
}