var app = require('express')()
var admin = require('firebase-admin')
var moment = require('moment')
var serviceAccount = require('../shoutbox-12210-firebase-adminsdk-3p6o3-0ba72de14d.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://shoutbox-12210.firebaseio.com',
  databaseAuthVariableOverride: null
})

var database = admin.database()
var date = Date.now()

function writeUserData (userId, username, password, imageUrl) {
  database.ref('users/' + userId).set({
    username,
    password,
    imageUrl
  })

  console.log('test')
}

function writePostData (postId, user, shout, date) {
  database.ref('posts/' + postId).set({
    postId,
    user,
    shout,
    date: Date.now()
  })

  console.log('test')
}

/*
writeUserData('1', 'john@mail.com', 'test','http://lorempixel.com/g/400/200/')
writeUserData('2', 'ben@mail.com', 'test','http://lorempixel.com/g/400/200/')
writeUserData('3', 'gina@mail.com', 'test','http://lorempixel.com/g/400/200/')
*/

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/api', (req, res) => {
  res.send('test')
})

app.get('/api/auth', (req, res) => {
  res.send('auth')
})

app.get('/api/adduser', (req, res) => {
  res.send('add')
})

app.get('/api/addshout', (req, res) => {
  writePostData(Math.random().toString(36).substr(2), req.query.user, req.query.shout, date)
  res.json('done')
})

app.get('/api/posts', (req, res) => {
  database.ref('posts/').orderByChild('date').once('value')
  .then(snapshot => {
    var r = []
    snapshot.forEach(child => {
      r.push(child)
    })

    res.json(r.reverse())
  })
})

app.get('/api/users', (req, res) => {
  database.ref('users/').once('value')
  .then(snapshot => {
    var r = []
    snapshot.forEach(child => {
      r.push(child)
    })
    res.json(r)
  })
})

app.get('/api/delete', (req, res) => {
  database.ref('posts/' + req.query.id).remove()
})

app.get('/api/posts/:id', (req, res) => {
  database.ref('posts/' + req.params.id).once('value')
  .then(snapshot => {
    res.json(snapshot)
  })
})

app.get('/api/update/:id', (req, res) => {
  database.ref('posts/').child(req.params.id).update({
    shout: req.query.data
  })
  res.json('done')
})

app.listen(3000, () => { console.log('server started at port 3000') })
