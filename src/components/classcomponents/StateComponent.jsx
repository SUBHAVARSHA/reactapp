import React from "react";
class stateComponent extends React.Component{
    constructor(){
        super()
        this.state={
            name:"KEC",
            course:"MERN"
        }
    }
    changeState=()=> {
        console.log("Kongu Engineering College")
        
    }
    render(){
        return(
            <div>
                <h1>This is a State Component</h1>
                <h2>Hello, {this.state.name} This is {this.state.course} class</h2>
                <h3>I am changing the state of the {this.state.name} to{this.changeState()}</h3>
                <button onMouseOver={this.changeState}>Click Me to Change the State </button>
                <button onClick={this.changeState}>Click Me to Change the State </button>
            </div>
        )
    }
}
export default stateComponent;