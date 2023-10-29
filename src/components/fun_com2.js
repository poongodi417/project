import react from "react";
import FunctionalComp3 from "./fun_comp3";

function FunctionalComp2(props){
    return(
        <div>Displaying functional components2.{props.Name} {props.arr[2]}
           <FunctionalComp3 Age="21"/>
        </div>
        
    )
}

export default FunctionalComp2;