import React, {useState} from "react";

function CounterInFunc(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>In a Functional Component</h1>
            <h1>count:{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>

        </div>
    )
}

export default CounterInFunc;