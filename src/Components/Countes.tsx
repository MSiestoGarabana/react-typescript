import {useState} from 'react'

export const Counter = () => {

   const [counter, setCounter] = useState(0)

   const incrementar = () => {
    setCounter(counter + 1)
   }

return (
    <div className="mt-5">
       <h3>Counter: useState</h3>
       <span>Valor: {counter}</span>
       <br/>
       <button onClick={incrementar} className='btn btn-outline-primary mt-2' >
        +1
       </button>
    </div>
)
}