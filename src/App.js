import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import LoginScreen from './LoginScreen';

function App() {
  const user = null;
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
