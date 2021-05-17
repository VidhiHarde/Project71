import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB9BRUIfw_1TNA8aJbt2MHb47zuhCcTKVc",
    authDomain: "storyhub-9d529.firebaseapp.com",
    databaseURL: "https://storyhub-9d529-default-rtdb.firebaseio.com",
    projectId: "storyhub-9d529",
    storageBucket: "storyhub-9d529.appspot.com",
    messagingSenderId: "878397539265",
    appId: "1:878397539265:web:765bd3c9a972b4c6ace540"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    export default firebase.firebase()
    