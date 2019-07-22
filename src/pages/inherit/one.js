import React from 'react';
class InheritOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
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
        );
    }
    componentDidMount() {
        var p = [];
        var A = new Function();
        A.prototype = p;
        var a = new A;
        a.push(1);
        console.log(a.length);
        console.log(p.length);
    }
}
export default InheritOne;