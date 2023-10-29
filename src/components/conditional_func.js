import React,{useState} from "react";

function ConditionalRendering(){
    const [state, setState] = useState(true);


    if(state){
        return(
            <div>
                <h1>ConditionalRendering</h1>
                <p>welcome student</p>
                

            </div>
        )
    }
    else{
        return(
            <div>
                <p>welcome guys</p>
            </div>
        )
    }
}


export default ConditionalRendering;