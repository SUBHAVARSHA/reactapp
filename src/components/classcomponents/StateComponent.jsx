import React from "react";
class stateComponent extends React.Component{
    constructor(){
        super()
        this.state={
            name:"KEC",
            course:"MERN"
        }
    }
    render(){
        return(
            <div>
                <h1>This is a State Component</h1>
                <h2>Hello, {this.state.name} This is {this.state.course} class</h2>
            </div>
        )
    }
}
export default stateComponent;