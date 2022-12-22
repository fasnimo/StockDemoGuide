import React from 'react'

function Apple(props) {
    return <div className="ap">
        <p>Apple</p>
        <p>Current Stock Exchange Rate:</p>
        <div className="stock">
            {props.number.company.price2}
        </div>
    </div>
}

export default Apple