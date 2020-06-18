import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOEl8vtNRMo7oLez5riDpgLCb65hAZkTs",
  authDomain: "boite-a-recettes-dbc4b.firebaseapp.com",
  databaseURL: "https://boite-a-recettes-dbc4b.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
