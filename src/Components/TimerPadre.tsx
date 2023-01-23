import React from 'react'
import { Timer } from './Timer';

export const TimerPadre = () => {
    return(
        <>
        <span>Milisegundos { 1000 }</span>

       <br/>

       <button className="btn btn-outline-success">1000</button>

        <Timer/>
        </>
    )
}