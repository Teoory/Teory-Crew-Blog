import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApFzR_37y2cf3UtYCtfzu5DyK2tXsZimE",
  authDomain: "teorycrew-blog.firebaseapp.com",
  projectId: "teorycrew-blog",
  storageBucket: "teorycrew-blog.appspot.com",
  messagingSenderId: "269042717754",
  appId: "1:269042717754:web:22deb4027fad738df55103"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
