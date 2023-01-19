import React, { useEffect, useState } from 'react';
import AuthGoogle from './AuthGoogle';
import firebase from 'firebase/compat/app';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
import Authenticated from './Authenticated';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDNCKU_ztvevPFell0ItLvZHj5LXMXvDrM",
    authDomain: "admin-site-7045f.firebaseapp.com",
    projectId: "admin-site-7045f",
    storageBucket: "admin-site-7045f.appspot.com",
    messagingSenderId: "132117631723",
    appId: "1:132117631723:web:0aef2bf89067b71131a4ae",
    measurementId: "G-KE2FHM4V1P"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(firebase.auth(), user => {
      if (user) {
        setUser({ email: user.email, uid: user.uid })
      } else {
        setUser({});
      }
    });
  });

  return (
    <div className="App">
      <BrowserRouter>
        {user?.email ? (
          <Routes>
            <Route path="/authenticated" element={<Authenticated user={user} />} />
          </Routes>
        ) : (
          <AuthGoogle auth={firebase.auth()} />
        )}
      </BrowserRouter>

      <div>
        <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
      </div>
    </div>
  );
}

export default App;
