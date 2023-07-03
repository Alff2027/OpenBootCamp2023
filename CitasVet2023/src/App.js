import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario/Formulario';
import Cita from './components/Formulario/Cita';

function App() {
  //LocalStorage solo almacena strings
  //citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {//si no existen citas, inicia con un arreglo vacio
    citasIniciales = [];
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // useEffect para realizar ciertas operaciones cuando el state cambia, se ejecuta cuando el componente esta listo y tbn cuando hay una cambio de estado
  useEffect(() => {
    if(citasIniciales) {
      // si hay citas
      localStorage.setItem('citas',JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  },[citas, citasIniciales]);//para que se ejecute solo una vez, se pasa un arreglo vacio--cuando el state de citas cambie, se ejecutara el useEffect

  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // Función que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }
  
  //mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => {
              return <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            })}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
