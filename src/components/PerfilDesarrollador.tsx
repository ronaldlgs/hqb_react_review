import React from 'react'

interface Perfil{
    nombre: string,
    edad: number,
    tienePantalla: boolean
}

export default function PerfilDesarrollador() {
 
      return (
        
             <div>
                    <form>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" placeholder="Nombre" />
                        </div>
                    <div className="form-group">
                        <label >Edad</label>
                        <input type="text" className="form-control" id="txtEdad" placeholder="Edad" />
                    </div>
                    <div className="form-group">
                        <label >Tiene Pantalla</label>
                        <input type="text" className="form-control" id="txtPantalla" placeholder="Tiene Pantalla" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
              </div>
        
    )

}