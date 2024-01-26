import React from "react";
class StateComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "KEC",
            course: "MERN"
        }
    }
    changeState = () => {

        console.log("Kongu Engineering College") //useState should be used to changeState when we come to hooks.
    }
    render() {
        return (
            <div>
                <h1>This is State Component</h1>
                <h2>Hello,{this.State.name} <br></br>This is again {this.State.course} class</h2>
                <h3> I am Changing the state of the {this.State.name} to {this.changeState()}</h3>
                <button onMouseOver={this.changeState}>Click me to change the state</button>

            </div>
        )
    }

}
export default StateComponent;