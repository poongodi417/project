import {Component} from "react";

class DisplayingClass extends Component{
  constructor(){
    super()
    this.state = {
        count: 0
    }
  }

  stateCounter(){
    this.setState({
        count : this.state.count+1
    })
  }
    render(){
        return(
            <div>
                <h1>Displaying data from a class component</h1>
                <h1>Count : {this.state.count}</h1>
                <button type="button" onClick={()=>{this.stateCounter()}}>Increment</button>

            
            </div>
        )
    }

}

export default DisplayingClass;