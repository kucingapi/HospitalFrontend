import './App.css';
import Login from '../form/Login.jsx';
import Register from '../form/Register';
import Dashboard from '../userAppointment/Dashboard';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
