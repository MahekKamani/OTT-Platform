import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import LoginScreen from './LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((userAuth) => {
      if(userAuth) {

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
