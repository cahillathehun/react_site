//React imports START
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//React imports END

//Firebase import and config START
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyCUZLabBYQ-B-D5fLH-JY7H7WgEt6RfbO8",
    authDomain: "react-site-ac.firebaseapp.com",
    projectId: "react-site-ac",
    storageBucket: "react-site-ac.appspot.com",
    messagingSenderId: "455834694018",
    appId: "1:455834694018:web:764d40f698f82712421f9b",
    measurementId: "G-SWDBEQYYGE"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//Firebase import and config END

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals