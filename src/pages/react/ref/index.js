import React from 'react';

class RefScreen extends React.Component {
  constructor (props) {
    super(props);
    this.inputref = React.createRef();
  }
  componentDidMount() {
    console.log(this.inputref);
  }
  render () {
    return (
      <div className="container">
        <div className="center">
          <div className="inner">
            <input 
              ref={this.inputref}
            />
          </div>
        </div>
      </div>
    ) 
  }
}

export default RefScreen;