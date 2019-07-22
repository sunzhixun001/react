import React from 'react';
class AlgorithmOne extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }
    render() {
        return (
            <div>
                <div>
                    <ol>
                        <li><code>'1024word'</code></li>
                        <li><code>' -1024word'</code></li>
                        <li><code>'word102
                            4'</code></li>
                        <li><code>'10word24'</code></li>
                    </ol>
                    <ol>
                        <li><code>1024</code></li>
                        <li><code>-1024</code></li>
                        <li><code>0</code></li>
                        <li><code>10</code></li>
                    </ol>
                </div>
                <div><input value={this.state.value} onChange={e => {this.onInputChange(e);}} /></div>
                <div><button onClick={() => {this.onButtonClick()}}>计算</button></div>
            </div>
        )
    }
    onButtonClick (params) {
        let number = 
        parseInt(
        Array.from(this.state.value)
        .map(s => {
            return (s === "-" || !isNaN(parseInt(s)))?s:' ';
        })
        .join("")
        .split(" ")[0]);
        console.log(isNaN(number)?0:number);
    }
    onInputChange (event) {
        console.log("this: ", this);
        this.setState({
            value: event.target.value
        });
    }
}
export default AlgorithmOne;