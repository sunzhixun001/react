import React from 'react';
import './App.css';
import Scope from './Scope';
import AlgorithmIndex from './pages/algorithm/index';
import AlgorithmOne from './pages/algorithm/one';
import AlgorithmTwo from './pages/algorithm/two';
import AlgorithmThree from './pages/algorithm/three';
import WrittenIndex from './pages/written/index';
import WrittenOne from './pages/written/one';
import InheritIndex from './pages/inherit/index';
import InheritOne from './pages/inherit/one';
import ClosureIndex from './pages/closure/index';
import ClosureOne from './pages/closure/one';
import SelfIndex from './pages/self/index';
import CurryIndex from './pages/curry/index';
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
            <li><Link to="/self/index">this</Link></li>
            <li><Link to="/curry/index">柯里化</Link></li>
            <li><Link to="/implement/index">实现</Link></li>
          </ul>
        </header>
        <Switch>
          <Route path="/scope" component={Scope} />
          <Route path="/algorithm/index" component={AlgorithmIndex} />
          <Route path="/algorithm/one" component={AlgorithmOne} />
          <Route path="/algorithm/two" component={AlgorithmTwo} />
          <Route path="/algorithm/three" component={AlgorithmThree} />
          <Route path="/written/index" component={WrittenIndex} />
          <Route path="/written/one" component={WrittenOne} />
          <Route path="/inherit/index" component={InheritIndex} />
          <Route path="/inherit/one" component={InheritOne} />
          <Route path="/closure/index" component={ClosureIndex} />
          <Route path="/closure/one" component={ClosureOne} />
          <Route path="/self/index" component={SelfIndex} />
          <Route path="/curry/index" component={CurryIndex} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
