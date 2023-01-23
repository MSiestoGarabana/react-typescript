import {useEffect, useState} from "react";

type TimerArgs = {
    milisegundos: number
}

export const Timer = ( args: any) => {
    
    const[segundos, setSegundos] = useState(0)

console.log(args)

    useEffect( ()=>{
       setTimeout(() => setSegundos( segundos + 1) , 1000);
    }, [segundos])

    return (
        <>
        <h4>Timer:<small>{ segundos }</small></h4>
        </>
    )
}