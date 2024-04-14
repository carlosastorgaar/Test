import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
// Rutas
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// Base de datos
import vehicle from './data/vehicle.js'
import VehicleViews from './views/VehicleViews.jsx'

// Rutas de link
const routes = [
  {
    path: "/",
    element: <App /> 
  }
];

// Cada elemento de datos incluye una Card y crea una pagina linkeando con el title
vehicle.forEach((vehicle) => {
  routes.push({
    path: vehicle.name,
    element: <VehicleViews vehicle={vehicle}/>,
  })
})

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
