import React from 'react';
import { Link } from 'react-router-dom';
class AlgorithmIndex extends React.Component {
    render() {
        return (
            <div>
                <Link to="/algorithm/one">
                    <h4 className="heading">算法题目一</h4>
                </Link>
                <Link to="/algorithm/two">
                    <h4 className="heading">算法题目二</h4>
                </Link>
                <Link to="/algorithm/three">
                    <h4 className="heading">算法题目三</h4>
                </Link>
            </div>
        )
    }
}
export default AlgorithmIndex;