import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/code.css';
class ClosureIndex extends React.Component {
    render() {
        return (
            <div>
                <Link to="/closure/one">
                    <h4 className="heading">闭包题目一</h4>
                </Link>
                <pre>
                    <code className="hljs bash copyable" lang="bash">
                    <span class="hljs-keyword">function</span> <span class="hljs-function">
                        <span class="hljs-title">mo</span>
                    </span>{`(){
    var x = 0;`}<span class="hljs-built_in">
                    {`      
    return`}</span> <span class="hljs-function"><span class="hljs-title">
    function</span>
                    </span>{`(){
        console.log(++x)
    }
}
var a = mo();
var b = mo();
a();
a();
b();

`}
                    </code>
                </pre>
            </div>
        )
    }
}
export default ClosureIndex;