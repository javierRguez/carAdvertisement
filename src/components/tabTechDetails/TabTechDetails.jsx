import React from 'react'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import engine from '../../img/engine.png'
import car from '../../img/car.png'
import consumption from '../../img/consumption.png'

function TabTechDetails() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          alt="car"
          src={car}
          style={{ width: '24px', height: '24px', marginRight: '10px' }}
        />
        <Typography variant="h6" component="div">
          Datos del modelo y carrocería:
        </Typography>
      </div>
      <div>
        <ul>
          <li>
            <Typography variant="body1" component="div">
              Capacidad del depósito: 53 litros
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Versión: 1.6 TDCi Trend Wagon
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Nº de puertas: 5
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Largo x ancho x alto: 4472 x 1840 x 1609mm
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Volumen del maletero: 482 litros
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Nº de plazas: 5
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Peso: 1391 kg con conductor
            </Typography>
          </li>
        </ul>
      </div>
      <Divider />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          alt="engine"
          src={engine}
          style={{ width: '24px', height: '24px', marginRight: '10px' }}
        />
        <Typography variant="h6" component="div">
          Motor y transmisión:
        </Typography>
      </div>
      <div>
        <ul>
          <li>
            <Typography variant="body1" component="div">
              Alimentación: Diesel &quot;Common rail&quot;
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Caja de cambios: Manual 5 velocidades
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Combustible: Diesel
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Configuración: En lÍnea
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Nº de cilindros: 4
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Distribución: Doble árbol de levas en cabeza (DOHC)
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Cilindrada: 1560 cc
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Potencia máxima: 109 cv a 4000 rpm
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Par máximo: 80 Nm a 1750 rpm
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Tracción: Delantera
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Wattios motor: 80 kW
            </Typography>
          </li>
        </ul>
      </div>
      <Divider />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          alt="consumption"
          src={consumption}
          style={{ width: '24px', height: '24px', marginRight: '10px' }}
        />
        <Typography variant="h6" component="div">
          Consumo y prestaciones:
        </Typography>
      </div>
      <div>
        <ul>
          <li>
            <Typography variant="body1" component="div">
              Aceleración (0-100km/h): 11.1 segundos
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Velocidad Máxima: 188 km/h
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Consumo urbano: 6.2 l/100km
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Consumo extraurbano: 4 l/100km
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Consumo medio: 4.8 l/100km
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default TabTechDetails
