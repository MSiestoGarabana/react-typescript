import { Counter } from "./Components/Counter";
import { Usuario } from "./Components/Usuario";

import { TimerPadre } from "./Components/TimerPadre";

import { ContadorRed } from "./Components/ContadorRed";

import { Formulario } from "./Components/Formulario";


function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr/>

      <h2>useState</h2>
      <Counter/>

      <Usuario/>

      <h2>useEffect - useRef</h2>
      <hr/>
      <TimerPadre/>


      <h2>useReducer</h2>
      <hr/>
      <ContadorRed/>

      <h2>CustomHooks:</h2>
      <hr/>
      <Formulario/>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </>
  );
}

export default App;
