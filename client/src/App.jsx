import NavScrollExample from './components/NavBar';
import { useState } from 'react';

function App() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState(0);

  const mostrarDatos = () => {
    alert(nombre)
  }

  return (
    <div>
      <NavScrollExample />

      <div className="container">
        
        <label>Nombre: <input onChange={(event) => {
          setNombre(event.target.value);
        }} type='text'></input></label>

        <label>Apellido: <input onChange={(event) => {
          setApellido(event.target.value);
        }} type='text'></input></label>

        <label>Edad: <input onChange={(event) => {
          setEdad(event.target.value);
        }} type='number'></input></label>
        <button onClick={mostrarDatos}>Registrar</button>
      </div>
      </div>
  )
}

export default App
