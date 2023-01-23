import {useEffect, useRef, useState} from "react";

type TimerArgs = {
    milisegundos: number,
   
}

export const Timer = ( { milisegundos }: TimerArgs) => {
    
    const[segundos, setSegundos] = useState(0)
    const ref = useRef<NodeJS.Timeout>()    

    useEffect( ()=>{
       ref.current && clearInterval( ref.current )
       ref.current = setTimeout(() => setSegundos( segundos + 1) , milisegundos);
    }, [segundos, milisegundos])

    return (
        <>
        <h4>Timer:<small>{ segundos }</small></h4>
        </>
    )
}