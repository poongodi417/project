
import './App.css';
import DisplayingData from './components/displaying_data';
import DisplayingClass from './components/class_component';
import FunctionalComp1 from './components/fun_comp';
import CounterInFunc from './components/fun_state';
import ConditionalRendering from './components/conditional_func';
import TernaryOperator from './components/ternary_operaters';
import Toggle from './components/eventbinding';
import Looping from './components/looping';

import Home from './components/life_cycle';
import ExampleUseEffect from './components/use_effect';
import HttpCall from './components/axios';



function App() {
  return (
    <div >
      {/* <DisplayingData/>
      <DisplayingClass/>
      <FunctionalComp1/>
      <CounterInFunc/>
      <ConditionalRendering/>
      <TernaryOperator/>
      <Toggle/>
      <Looping/>
      <Home/>
      <ExampleUseEffect/>  */}
      <HttpCall/>


    </div>
  );
}

export default App;
