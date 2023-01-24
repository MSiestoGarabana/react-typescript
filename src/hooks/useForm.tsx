import { useState, ChangeEvent } from "react";


export function useForm<T>( initState:T ){
   
    
    const [formulario, setFormulario]= useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
       const { name, value } = target;
       
       setFormulario({
        ...formulario,
        [ name ]: value
       })
    }
    return {
        formulario,
        handleChange
    }
}