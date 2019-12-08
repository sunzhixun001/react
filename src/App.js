import React from 'react';
import './App.css';
import HomeScreen from './pages/home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <HomeScreen />
        {/* <header className="App-header">
          <ul>
            <li><Link to="/scope">作用域</Link></li>
            <li><Link to="/algorithm/index">算法</Link></li>
            <li><Link to="/written/index">笔试</Link></li>
            <li><Link to="/inherit/index">继承</Link></li>
            <li><Link to="/closure/index">闭包</Link></li>
            <li><Link to="/self/index">this</Link></li>
            <li><Link to="/curry/index">柯里化</Link></li>
            <li><Link to="/implement/index">实现</Link></li>
          </ul>
        </header> */}
      </div>
    </Router>
  );
}
export default App;
