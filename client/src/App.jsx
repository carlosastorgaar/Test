import NavScrollExample from './components/NavBar';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState(0);

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre:nombre,
      apellido:apellido,
      edad:edad
    }).then (()=> {
      alert("Usuario registrado");
    });
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
        <button onClick={add}>Registrar</button>
      </div>
      </div>
  )
}

export default App
