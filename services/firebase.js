import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCaWoQOBM8RZ04kogvwM9PUtsVxmfIqhLE",
    authDomain: "grupoutema9.firebaseapp.com",
    databaseURL: "https://grupoutema9.firebaseio.com",
    projectId: "grupoutema9",
    storageBucket: "grupoutema9.appspot.com",
    messagingSenderId: "962719795254",
    appId: "1:962719795254:web:07966161d1990780143097"
};

if(!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);