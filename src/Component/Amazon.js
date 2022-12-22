import React from 'react';

function Amazon(props) {
    return <div className="am">
        <p>Amazon</p>
        <p>Current Stock Exchange Rate:</p>
        <div className="stock">
            {props.number.company.price1}
        </div>
    </div>
}

export default Amazon