import * as firebase from 'firebase';
import { Alert } from 'react-native';

var firebaseConfig = {
    apiKey: "AIzaSyC_tpQ2Dg5Y28xLYiLflYeVsR_INGF_TSA",
    authDomain: "mysociety-6878232.firebaseapp.com",
    databaseURL: "https://mysociety-6878232.firebaseio.com",
    projectId: "mysociety-6878232",
    storageBucket: "mysociety-6878232.appspot.com",
    messagingSenderId: "292452977283",
    appId: "1:292452977283:web:a3a57e9edd52c40fd4a9b6",
    measurementId: "G-1RJEEFTBJ5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics(); 
  const auth = firebase.auth()

  const db = firebase.firestore();

  function setuserinformation(user){
    return db. collection("BloodDonor").add(user)
  }
  const fetchdata = async()=>{
     return db.collection('BloodDonor')
    .onSnapshot()  
  }
  export{
    firebase,
    setuserinformation,
    fetchdata
  }