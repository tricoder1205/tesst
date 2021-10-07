import React from 'react';
import { Spinner } from 'reactstrap';
import './Loading.scss';

Loading.propTypes = {};

function Loading() {
    return (
        <div className="Loading">
            <Spinner color="primary" />
        </div>
    );
}

export default Loading;