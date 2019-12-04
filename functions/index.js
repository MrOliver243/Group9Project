


const functions = require('firebase-functions');
const app = require('express')();
const cors = require('cors');
app.use(cors());
const { db } = require('./utilities/admin');
const { signup, login, getAuthenticatedUser} = require('./controllers/users');
const FBAuthentication = require('./utilities/FBAuthentication');
// users routes
app.post('/signup', signup);
app.post('/login', login);
app.get('/user', FBAuthentication, getAuthenticatedUser);

exports.api = functions.region('europe-west1').https.onRequest(app);
