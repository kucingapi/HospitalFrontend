import './App.css';
import Login from '../form/Login';
import Register from '../form/Register';
import {BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;
