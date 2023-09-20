const { initializeApp } = require('firebase/app') ;
const { getFirestore } = require('firebase/firestore')
const config = require('../config') ;

const connectDb = initializeApp(config.firebaseConfig);
const db = getFirestore(connectDb);

module.exports = db