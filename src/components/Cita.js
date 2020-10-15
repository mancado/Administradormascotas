import React from 'react';

const Cita = ({cita,eliminarCita}) => (
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Sexo: <span>{cita.sexo}</span></p>
        <p>Tipo de mascota: <span>{cita.tipomascota}</span></p>
        <p>Servicio: <span>{cita.servicio}</span></p>

        <button
        className="button app u-full-width"
        onClick={()=> eliminarCita(cita.id)}

        >Eliminar &times;</button>
    </div>
)



export default Cita;