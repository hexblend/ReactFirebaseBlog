import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBEkXhs-PUhMep_K1Zfv2X1SZUm3x0aKZg",
    authDomain: "reactfirebaseblog.firebaseapp.com",
    databaseURL: "https://reactfirebaseblog.firebaseio.com",
    projectId: "reactfirebaseblog",
    storageBucket: "reactfirebaseblog.appspot.com",
    messagingSenderId: "521259501991"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;