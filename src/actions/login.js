import { browserHistory } from 'react-router'
import { AUTH_SUCCESS, AUTH_FAILURE, SET_USER } from '../types/index'
const serverapi = 'https://shoutbox.mybluemix.net'
export const login = data => (dispatch, getState) => {
  dispatch({ type: 'AUTHENTICATING', data: data.username })

  const options = {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: data.username, password: data.password })
  }

  const authdata = { auth: false, user: null }

  fetch(`${serverapi}/api/auth`, options)
    .then(r => r.json())
    .then(r => {
      if (r === 'authorized') {
        window.localStorage.setItem('auto', JSON.stringify(Object.assign(authdata, { auth: true, user: data.username })))
        dispatch({ type: AUTH_SUCCESS, data: { auth: true, user: data.username } })

        fetch(`${serverapi}/api/user/${data.username}`)
          .then(r => r.json())
          .then(([ r ]) => {
            dispatch({ type: SET_USER, data: { userInfo: r } })
            browserHistory.push('/react-shoutbox/shout')
          })

      } else {
        dispatch({ type: AUTH_FAILURE, data: { auth: false, auth_message: 'Invalid credentials' } })
        localStorage.setItem('auto', JSON.stringify(Object.assign(authdata, { auth: false, auth_message: 'Invalid Credentials' })))
      }
    })

}
