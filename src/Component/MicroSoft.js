import React from 'react'

function MicroSoft(props){
    return <div className="mi">
        <p>MicroSoft</p>
        <p>Current Stock Exchange Rate:</p>
        <div className="stock">
            {/* {console.log(props.number.company.price3)} */}
            {props.number.company.price3}
        </div>
    </div>
}

export default MicroSoft