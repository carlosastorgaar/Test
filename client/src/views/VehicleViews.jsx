import React from 'react'

function VehicleViews({vehicle}) {
  return (
    <div>
        <h1>{vehicle.name}</h1>
        <h2>{vehicle.description}</h2>
    </div>
  )
}

export default VehicleViews
