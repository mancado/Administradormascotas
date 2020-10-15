import React,{Fragment,useState,useEffect} from 'react';
import Formulario from'./components/Formulario';
import Cita from'./components/Cita';
import PropTypes from 'prop-types';

function App() {



// Citas en local storage

let citasIniciales = JSON.parse(localStorage.getItem('citas'))

//arreglo de citas
const[citas, guardarCitas]=useState(citasIniciales ? citasIniciales : []);

//Use Effect para realizar ciertas operaciones cuando el state cambia

useEffect(() => {
  localStorage.setItem('citas', JSON.stringify(citas))
},[citas]);




//leer y agregar la nueva
const crearCita = cita=>{
  guardarCitas([
    ...citas,
    cita
  ])
}

//Eliminar una cita por su id
const eliminarCita=id =>{
  const nuevasCitas=citas.filter(cita=> cita.id !== id);
  guardarCitas(nuevasCitas);
}


//mensaje condicional
const titulo = citas.length===0 ?'No hay citas' : 'Lista de citas ';


  return (

    <Fragment>

      <h1>Administrador de mascotas</h1>

      <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario
                crearCita={crearCita}

              ></Formulario>
            </div>


            <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita=>(
                <Cita
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
               
                />
              ))}
            </div>
          </div>
      </div>

    </Fragment>
  );
}

Formulario.propTypes={
  crearCita:PropTypes.func.isRequired

}



export default App;
