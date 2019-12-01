import React from 'react';
import '../../css/code.css';

const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
const arr2 = ['A', 'B', 'C', 'D'];
class AlgorithmThree extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }
    render() {
        return (
            <div>
                <pre>
                    <code className="hljs bash copyable" lang="bash">
                        {`
['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']
合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']
                        `}
                    </code>
                </pre>
                <div>
                    <button onClick={()=>{this.onButtonClick()}}>解法1</button>
                </div>
            </div>
        )
    }
    onButtonClick() {
        let arr3 = arr1.concat(arr2);
        arr3.sort((a,b)=>{
            let result = 0;
            const _a0 = a[0],_a1 = a[1] || "9",_b0 = b[0], _b1 = b[1] || "9";
            result = _a0.localeCompare(_b0);
            if(result === 0){
                result = _a1.localeCompare(_b1);
            }
            return result;
        });
        console.log(arr3);
    }
}
export default AlgorithmThree;