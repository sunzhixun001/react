import React from 'react';
class ClosureOne extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <pre>
                    <code className="hljs bash copyable" lang="bash">
{`
(){
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
        );
    }
    componentDidMount() {

    }
}
export default ClosureOne;