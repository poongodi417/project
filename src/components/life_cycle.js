import React, { Component } from "react";


class Home extends Component{
    constructor(){
        super()
        this.state={
            counter: 0,
        };
        console.log("constructor");
    }



    increment(){
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    decrement(){
        this.setState({
            counter: this.state.counter - 1,
        });
    }


    
componentWillMount(){
    console.log("component Will mount");
}

 componentDidMount(){
    console.log("component did mount");
    this.setState({
            counter: this.state.counter + 1
        })

}

componentWillUpdate(nextProps, nextState){
    console.log('Component Will UPDATE');
}

componentDidUpdate(nextProps, nextState){
    console.log('Component Did UPDATE');

}

shouldComponentUpdate(nextProps, nextState){
    return true;

}


render(){
    console.log("component rendered")
    return(
        <div>
            <h1>This is an example for state: {this.state.counter}</h1>
            <button className="btn btn-secondary" onClick={()=> this.increment()}>Increment</button>
            <button className="btn btn-primary" onClick={()=> this.decrement()}>Decrement</button>

        </div>
    )
}
}


export default Home
