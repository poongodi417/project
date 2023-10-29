import react from "react";
import FunctionalComp2 from "./fun_com2";

function FunctionalComp1(){
    return(
        <div>Displaying functional components1
        <FunctionalComp2 Name="pooja" arr={['A', 'B', 'C', 'D']}/>
 </div>
    )
}

export default FunctionalComp1;