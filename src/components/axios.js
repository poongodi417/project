import axios from "axios";
import React, {Component} from "react";




class HttpCall extends Component{
    constructor(){
        super()
        this.state={
            data:[],
            error:[]
              }
    }


    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res.data);
            this.setState({data:res.data})
        } )
        .catch(error=>{
            console.log(error);
        })
}
render(){
    const {data, error} = this.state
    return(
        <div>
            <h1>Example for React Http</h1>
            {data.length? data.map(n=><div>{n.email}</div>): null}
            {data.length? data.map(n=><div>{n.username}</div>): null}

            {error? <div>{error}</div>: null}

        </div>
    )
}
}

export default HttpCall;