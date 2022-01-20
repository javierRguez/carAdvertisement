import React from 'react'
import Typography from '@mui/material/Typography'

function TabDescription() {
  return (
    <div>
      <Typography variant="body1" component="div">
        Coche con 231 mil kilómetros, revisado mecánicamente y listo para hacer
        muchos más kilómetros. Se le han realizado los siguientes cambios:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" component="div">
            Correa de distribución, correa de accesorios y bomba de agua.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="div">
            Montaje de neumático nuevo y equilibrado en las 4 ruedas.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="div">
            Pastillas y discos de freno delanteros.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="div">
            Sensor de presión de combustible (diésel Common Rail).
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="div">
            Alternador y batería.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="div">
            Filtro del gasoil, filtro del habitáculo, filtro del aire y filtro
            del aceite.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="div">
            Cambio de aceites tanto de motor como de transmisión.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="div">
            Cambio de bombillas en los 4 intermitentes y en las dos luces
            delantera.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="div">
            Radio JVC con conexión Bluetooth, entrada Aux Jack 3.5 y USB
            (valorada en 200€)
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="div">
            Volante retapizado
          </Typography>
        </li>
      </ul>
    </div>
  )
}
export default TabDescription
