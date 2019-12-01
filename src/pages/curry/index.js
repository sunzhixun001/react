import React from 'react';
function curry(fn, args = []) {
    return function() {
        let rest = [...args, ...arguments];
        if(rest.length < fn.length) {
            return curry.call(this, fn, rest);
        }else{
            return fn.apply(this, rest);
        }
    }
}
function sum(a, b, c){
    return a + b + c;
}
class CurryIndex extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <h1>柯里化1</h1>
            </div>
        );
    }
    componentDidMount() {
        let sumFn = curry(sum);
        console.log(sumFn(1)(2)(3));
    }

};
export default CurryIndex;
