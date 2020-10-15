import React,{Fragment,useState} from 'react';
import uuid from 'uuid/dist/v4';



const Formulario = ({crearCita}) => {

    //crear State de Citas

    const[cita,actualizarCita]=useState({
        mascota: '',
        sexo: 'Macho',
        tipomascota:'Perro',
        servicio:'Urgencias'
    });

   
    const[error,actualizarError]=useState(false)



    //funcion que se ejecuta cada que el usuario escribe en el input
    //leer y guardar contenido de lo que el usuario escribe y en los distintos inputs creados
    const actualizarState = e =>{
        actualizarCita ({
            ...cita,//copia del useState
            [e.target.name] : e.target.value
        })
    }


    //Extraccion de valores

    const{ mascota,sexo,tipomascota,servicio}=cita;


    const submitCita = e =>{
        e.preventDefault();

        // Validar


        if(mascota.trim()===''|| sexo.trim()===''|| tipomascota.trim()===''||servicio.trim()===''){
            actualizarError(true);
            return;
        }
        actualizarError(false);
        

        // Asignar un ID
        cita.id=uuid();

        // Crear la cita
        crearCita(cita);

        // Reiniciar el form
        actualizarCita({
            mascota: '',
            sexo: 'Macho',
            tipomascota:'Perro',
            servicio:'Urgencias'
        })
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className="alerta-error"> todos los campos son obligatorios</p>  :null}
            

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}

                />
                <label>Sexo</label>
                <select
                    name="sexo"
                    className="u-full-width"
                    placeholder="Sexo"
                    onChange={actualizarState}
                    value={sexo}
                >
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option></select>

                 
                <label>Tipo de mascota</label>
                <select
                    type="date"
                    name="tipomascota"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={tipomascota}
                >
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Hamsters">Hamsters</option>
                <option value="Ave">Ave</option></select>
                
    
                

                <label>Servicio</label>
                <select
                    className="u-full-width"
                    name="servicio"
                    onChange={actualizarState}
                    value={servicio}


                >
                <option value="Urgencias">Urgencias</option>
                <option value="Valoracion">Valoracion</option>
                <option value="Hospitalizacion">Hospitalizacion</option></select>
                

                <button

                    type="submit"
                    className="button app u-full-width"

                >Agregar Mascota</button>

            </form>
        </Fragment>
     );
}

export default Formulario ;