const functions = require('firebase-functions');
const add = require('./math/functions/add');

exports.add = functions.https.onRequest(add);
