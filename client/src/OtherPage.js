import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div>
            <h1>Other page</h1>
            <Link to="/">Home</Link>
        </div>
    );
};