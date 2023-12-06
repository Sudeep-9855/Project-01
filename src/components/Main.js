// export function Main(props) {
//     return <h1> I am a {Props.myname} </h1>;
// }

import { Component } from "react";
export class Main extends Component{
    render() {
        return (
            <div>
                <h1>I am a MERN {this.props.myname}</h1>
            </div>
        )
        }
    }

Main.defaultprops={
    myName: "Developer"
}