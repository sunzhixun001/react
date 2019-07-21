import React from 'react';
import { Link } from 'react-router-dom';
class WrittenIndex extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/written/one">getElementsByTagName</Link></li>
                </ul>
            </div>
        )
    }
}
export default WrittenIndex;