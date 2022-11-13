import './App.css';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<><HomeScreen/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
