import React, { Fragment, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

	// Crear state de citas
	const [cita, actualizarCita] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: ''
	});

	// state para errores
	const [ error, actualizarError ] = useState(false);

	// Función que se ejecuta cada vez que el usuario escribe en un input
	const actualizarState = e => {

		// se ve en que campo de esta escribiendo
		// console.log(e.target.name);

		// se ve que escribe el usuario
		// console.log(e.target.value);
	
		actualizarCita({
			// COPIA DEL OBJETO CITA
			...cita,
				// se escribe correctamente la información del input en la propiedad que se quiera agreagar
				[e.target.name]: e.target.value 
		})
	}

	// Extraer los valores
	const { mascota, propietario, fecha, hora, sintomas } = cita;

	// Cuando el usuario envía el formulario
	const submitCita = e => {
		// prevenir la acción por default
		e.preventDefault();

		// Validar
		//trim: aunque el usuario agregue espacios en blanco los elimina
		if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
			actualizarError(true);
			return;// se pone el return para que no se siga ejecutando
		}

		// Eliminar mensaje de error
		actualizarError(false);

		// Asignar un id: en este proyecto se instalara una libreria uuid para asignar id
		cita.id = uuidv4();// genera id unico;
		
		// Crear la cita
		crearCita(cita);

		// Reiniciar el form
		actualizarCita({
			mascota: '',
			propietario: '',
			fecha: '',
			hora: '',
			sintomas: ''
		})
	}

	return ( 
		<Fragment>
			<h2>Crear cita</h2>

			{ error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

			<form
				onSubmit={submitCita}
			>
				<label>Nombre Mascota</label>
				<input 
					type="text"
					name="mascota"
					className="u-full-width"
					placeholder="Nombre mascota"
					onChange={actualizarState}
					value={mascota}
				/>

				<label>Nombre Dueño</label>
				<input 
					type="text"
					name="propietario"
					className="u-full-width"
					placeholder="Nombre dueño de la mascota"
					onChange={actualizarState}
					value={propietario}
				/>

				<label>Fecha</label>
				<input 
					type="date"
					name="fecha"
					className="u-full-width"
					onChange={actualizarState}
					value={fecha}
				/>

				<label>Nombre Dueño</label>
				<input 
					type="time"
					name="hora"
					className="u-full-width"
					onChange={actualizarState}
					value={hora}
				/>

				<label>Síntomas</label>
				<textarea
					className="u-full-width"
					name="sintomas"
					onChange={actualizarState}
					value={sintomas}
				></textarea>

				<button
					type="submit"
					className="u-full-width button-primary"
				>Agregar cita</button>
			</form>
		</Fragment>
		);
}

Formulario.propTypes = {
	// es una funcion, y es obligatoria(isRequired)
	crearCita: PropTypes.func.isRequired
}
 
export default Formulario;