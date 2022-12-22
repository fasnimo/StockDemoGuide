import React, {Component} from 'react'
import HomePage from "./HomePage"

class Main extends Component {
    constructor(){
        super()
        this.state = {
            price1: 90.01,
            price2: 130.01,
            price3: 220.01,
        }
        // this.state = { 
        //     companies : [
        //         {
        //             price1: 90.01,
        //             name: "Apple",
        //             id: 1
        //         },
        //         {
        //             price2: 130.01,
        //             name: "MicroSoft",
        //             id: 2
        //         },
        //        {
        //             price3: 220.01,
        //             name: "Amazon",
        //             id: 3
        //         }
        //     ]
        // }
    }

    componentDidMount(){
        this.interval = setInterval(()=> this.setState({
            price1: Math.floor(Math.random() * (9000 - 10000) + 10000) / 100,
            price2: Math.floor(Math.random() * (13000 - 16500) + 16500) / 100,
            price3: Math.floor(Math.random() * (22000 - 26000) + 26000) / 100
            }), 3000)            
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        // console.log(this.state)
        return <div>
            <HomePage company={this.state} />

        </div>
    }
}

export default Main