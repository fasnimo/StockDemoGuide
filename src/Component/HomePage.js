import React from "react";
import Amazon from "./Amazon";
import Apple from "./Apple";
import MicroSoft from "./MicroSoft";

function HomePage(props) {
    // console.log(props.company)
        return <div className="home">
            <h1>Recurring Stock Numbers</h1>
            <MicroSoft number={props} />
            <Apple number={props}/>
            <Amazon number={props}/>
        </div>
}

export default HomePage