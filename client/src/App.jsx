import './App.scss';
// Card de vehicles 
import Card from './components/Card';
// base de datos para Card
import vehicle from './data/vehicle';
// Boton para ocultar o mostrar texto
import ShowHide from './components/ShowHide';
// barra de navegación
import NavScrollExample from './components/NavBar';


function App() {

// Recorre la lista de vehicles en dat y los muestra en el componente Card
const vehicleList = vehicle.map((v, index) => {
  return <Card key={index} title={v.name} description={v.description} />;
});

  return (
    <div className='App'>

      <NavScrollExample />
      <div className='container'>
        {vehicleList}
      </div>
      <ShowHide/>


    
    </div> 


  )
}

export default App
