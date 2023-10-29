import React, {useEffect, useState} from "react";


function ExampleUseEffect(){
    const[count,setCount]=useState(0);



useEffect(()=>{ 
    
    if(count>10){
        setCount(1)

    }

},[count])

useEffect(()=> {
    setTimeout(()=>{
        setCount(count+1)
        console.log("component did update", {count})
    },1000)
},[count])



useEffect(()=> {
    setTimeout(()=>{
        setCount(count)
        console.log("component did mount")
    },1000)
},[])




return(
    <div>
        <h1>Examples for useEffect</h1>
        <h2>The Counter Value is: {count}</h2>
        {/* <button type="button" onClick={increment}>Increment</button> */}
    </div>
)
}
 export default ExampleUseEffect;

