import firebase from 'firebase';
//import React from "react";

const config = {
    apiKey: "AIzaSyCyW8sUYdcPvSsiKkhme0CG47hiTZw2Jr4",
    authDomain: "teensapp-efefd.firebaseapp.com",
    databaseURL: "https://teensapp-efefd-default-rtdb.firebaseio.com",
    projectId: "teensapp-efefd",
    storageBucket: "teensapp-efefd.appspot.com",
    messagingSenderId: "139241613828",
    appId: "1:139241613828:web:41ad790908a7b87b4d2351",
    measurementId: "G-SF54MSMHMS"
};

firebase.initializeApp(config);

export default firebase;