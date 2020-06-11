import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyByjnEM_ekzXHI-o2YiQJKRxJqQ-Gpog8o",
  authDomain: "dublinbus-28165.firebaseapp.com",
  databaseURL: "https://dublinbus-28165.firebaseio.com",
  projectId: "dublinbus-28165",
  storageBucket: "dublinbus-28165.appspot.com",
  messagingSenderId: "937477462671",
  appId: "1:937477462671:web:ed7a495f327b0380e7aefa"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
