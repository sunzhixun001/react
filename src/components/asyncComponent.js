import React, { Component } from 'react';

export default importComponent => {
  class AsyncComponent extends Component {
    constructor() {
      super();
      this.state = {
        component: null
      }
    }
    async componentDidMount() {
      let {default: component} = await importComponent();
      this.setState({component});
    }
    render() {
      let Comp = this.state.component;
      return Comp ? <Comp /> : null;
    }
  }
  return AsyncComponent;
};