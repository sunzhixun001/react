import React from 'react';
class Scope extends React.Component {
  render() {
      return (
        <div>
          <h2>作用域题目</h2>
          <a onClick={() => {console.log(this.props.history.goBack())}}>返回</a>
        </div>
      );
    }
  }
  export default Scope;