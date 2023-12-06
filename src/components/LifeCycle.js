import { Component } from "react";

export class LifeCycle extends Component{
    constructor() {
        super();
        this.state={
        bool: true
        }
    }
    static getDeriveStateFromProps(p,s){
        console.log(p,s)
        return null
    }
    componentDidMount(){
        console.log("Component Mounts")
    }
    handleClick=()=>{
        this.setState(
            {
                name : "sunil"
            }
        )
    }
    render(){
        console.log("Render is executed")
        return(
            <div>
                <h1>My name is {this.state.name}</h1>
                <button onClick={this.handleClick}> StateChange</button>
            </div>

        )
        
    }
}