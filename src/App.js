import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scope from './Scope';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <ul>
            <li><Link to="/scope">作用域</Link></li>
          </ul> */}
        </header>
        <Route path="/scope" component={Scope} />
      </div>
    </Router>
  );
}
export default App;
