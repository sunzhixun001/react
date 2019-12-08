import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Switch, Route } from 'react-router-dom';
import AsyncComponent from '../../components/asyncComponent';
// import Scope from '../scope';
// import AlgorithmIndex from '../algorithm/index';
// import AlgorithmOne from '../algorithm/one';
// import AlgorithmTwo from '../algorithm/two';
// import AlgorithmThree from '../algorithm/three';
// import WrittenIndex from '../written/index';
// import WrittenOne from '../written/one';
// import InheritIndex from '../inherit/index';
// import InheritOne from '../inherit/one';
// import ClosureIndex from '../closure/index';
// import ClosureOne from '../closure/one';
// import SelfIndex from '../self/index';
// import CurryIndex from '../curry/index';
const { Sider, Content }  = Layout;
const { SubMenu } = Menu;

 
const HomeScreen = () => {          
  return (
    <div>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
          >
            <SubMenu
              title="CSS"
            >
              <Menu.Item><Link to="/css/margin"></Link>margin</Menu.Item>
            </SubMenu>
            <SubMenu
              title="React"
            >
              <Menu.Item><Link to="/react/component"></Link>组件</Menu.Item>
              <Menu.ItemGroup
                title="ref"
              >
                <Menu.Item><Link to="/react/ref"></Link>Ref</Menu.Item>
                <Menu.Item><Link to="/react/ref"></Link>useRef</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item><Link to="/promise">Promise</Link></Menu.Item>
            <Menu.Item><Link to="/scope">作用域</Link></Menu.Item>
            <Menu.Item><Link to="/algorithm">算法</Link></Menu.Item>

          </Menu>
        </Sider>
        <Content>
          <Switch>
            <Route path="/promise" component={AsyncComponent(() => import('../promise'))} />
            <Route path="/scope" component={AsyncComponent(() => import('../scope'))} />
            <Route path="/algorithm" component={AsyncComponent(() => import('../algorithm'))} />
            <Route path="/css/margin" component={AsyncComponent(() => import('../css/margin'))} />
            <Route path="/react/component" component={AsyncComponent(() => import('../react/cmp'))} />
            <Route path="/react/ref" component={AsyncComponent(() => import('../react/ref'))} />
          </Switch>
        </Content>
      </Layout>
    </div>
  );
};

export default HomeScreen;