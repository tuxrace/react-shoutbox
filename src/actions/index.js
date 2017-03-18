const { fetch } = window

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
  console.log(data)
  fetch(`http://${window.location.hostname}:3000/api/delete?id=${data}`)
  dispatch({ type: 'DELETE', data })
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
