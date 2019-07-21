import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/code.css';
class InheritIndex extends React.Component {
    render() {
        return (
            <div>
                <Link to="/inherit/one">
                    <h4 className="heading" data-id="heading-4">题目一</h4>
                </Link>
                <pre>
                    <code className="hljs bash copyable" lang="bash">
{`
var p = [];
var A = new Function();
A.prototype = p;
var a = new A;
a.push(1);
console.log(a.length);
console.log(p.length);
`}
                    </code>
                </pre>
            </div>
        )
    }
}
export default InheritIndex;