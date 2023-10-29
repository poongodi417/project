import React, {useState} from "react";

function TernaryOperator(){
    const [state, setState] = useState(true);
    return state? (<div>welcome</div>) : (<div>Hello Student</div>)
}



export default TernaryOperator