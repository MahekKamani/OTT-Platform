import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import LoginScreen from './LoginScreen';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        console.log(userAuth);
      } else {

      }
    });

    return unsubscribe;
  },[]);

  return (
    <div className="App">
      <Router>
        {!user ? (
              <LoginScreen/>
          ) : (
              <Routes>
                <Route exact path="/" element={<><HomeScreen/></>}/>
              </Routes>
          )
        }
      </Router>
    </div>
  );
}

export default App;
