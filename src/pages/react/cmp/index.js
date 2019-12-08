import React from 'react';

const Child = (props) => {
  return (
    <div>
      <h1>Child</h1>
      <div>
        <button onClick={props.click.bind({a: 1})}>button</button>
      </div>
    </div>
  )
}

class CmpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  childclick() {
    console.log(this);
  };
  render() {
    return (
      <div className="container">
        <div className="center">
          <div className="inner">
            <Child
              click={() => {console.log(this);}}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CmpScreen;