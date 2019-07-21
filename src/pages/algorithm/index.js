import React from 'react';
import { Link } from 'react-router-dom';
class AlgorithmIndex extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/algorithm/one">提取最长有效数字</Link></li>
                </ul>
            </div>
        )
    }
}
export default AlgorithmIndex;