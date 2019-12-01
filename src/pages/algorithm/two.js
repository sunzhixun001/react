import React from 'react';
import '../../css/code.css';
const arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
class AlgorithmTwo extends React.Component {
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
已知如下数组：
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
                        `}
                    </code>
                </pre>
                <div>
                    <button onClick={()=>{this.onButtonClick()}}>解法1</button>
                    <button onClick={()=>{this.onButtonClick2()}}>解法2</button>
                </div>
            </div>
        )
    }
    onButtonClick() {
        let _arr = arr.toString().split(',');
        let obj = {};
        for(let k of _arr){
            obj[k] = parseInt(k);
        }
        const lastArr = Object.values(obj).sort((a,b)=> a-b);
        console.log(lastArr);
    }
    onButtonClick2() {
        console.log(Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>a-b));
    }
}
export default AlgorithmTwo;