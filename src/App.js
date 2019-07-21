import React from 'react';
import './App.css';
import Scope from './Scope';
import AlgorithmIndex from './pages/algorithm/index';
import One from './pages/algorithm/one';
import WrittenIndex from './pages/written/index';
import WrittenOne from './pages/written/one';
import InheritIndex from './pages/inherit/index';
import InheritOne from './pages/inherit/one';
import ClosureIndex from './pages/closure/index';
import ClosureOne from './pages/closure/one';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/scope">作用域</Link></li>
            <li><Link to="/algorithm/index">算法</Link></li>
            <li><Link to="/written/index">笔试</Link></li>
            <li><Link to="/inherit/index">继承</Link></li>
            <li><Link to="/closure/index">闭包</Link></li>
          </ul>
        </header>
        <Switch>
          <Route path="/scope" component={Scope} />
          <Route path="/algorithm/index" component={AlgorithmIndex} />
          <Route path="/algorithm/one" component={One} />
          <Route path="/written/index" component={WrittenIndex} />
          <Route path="/written/one" component={WrittenOne} />
          <Route path="/inherit/index" component={InheritIndex} />
          <Route path="/inherit/one" component={InheritOne} />
          <Route path="/closure/index" component={ClosureIndex} />
          <Route path="/closure/one" component={ClosureOne} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
