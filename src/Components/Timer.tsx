import {useEffect, useState} from "react";

export const Timer = () => {
    
    const[segundos, setSegundos] = useState(0)

    useEffect( ()=>{
       setTimeout(() => setSegundos( segundos + 1) , 1000);
    }, [segundos])

    return (
        <>
        <h4>Timer:<small>{ segundos }</small></h4>
        </>
    )
}