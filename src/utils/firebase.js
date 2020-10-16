import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD417mhySlMqZD3NTB3yPkd5cnfV2XFCHI",
  authDomain: "testing-9da90.firebaseapp.com",
  databaseURL: "https://testing-9da90.firebaseio.com",
  projectId: "testing-9da90",
  storageBucket: "testing-9da90.appspot.com",
  messagingSenderId: "101770569250",
  appId: "1:101770569250:web:6bcc37db2214622ab20c7b",
  measurementId: "G-7FPK6K9QR4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
