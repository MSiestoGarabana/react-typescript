import { ChangeEvent, useState } from "react"

export const Formulario = () => {
  

    const [formulario, setFormulario]= useState({
        postal: '',
        ciudad: ''
    });

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
       const {name, value} = target;
       
       setFormulario({
        ...formulario,
        [ name ]: value
       })
    }

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">Código postal:</label>
            <input type="text"
                   className="form-control"
                   name="email"
                   onChange={ handleChange }
                   />
        </div>

        
        <div className="mb-3">
            <label className="form-label">Ciudad:</label>
            <input type="text"
                   className="form-control"
                   name="ciudad"
                   onChange ={ handleChange}
                   />
        </div>

        <pre>{JSON.stringify(formulario)}</pre>
    </form>
  )
}
