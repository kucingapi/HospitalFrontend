import './App.css';
import Login from '../form/Login';
import {Router} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Login />
        </Router>
      </header>
    </div>
  );
}

export default App;
