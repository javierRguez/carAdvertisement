import React from 'react'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import shield from '../../img/shield.png'
import comfort from '../../img/comfort.png'
import multimedia from '../../img/multimedia.png'
import useAnalytics from '../../hooks/useAnalytics'

function TabEquipment() {
  useAnalytics('user-view-tabEquipment')
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          alt="shield"
          src={shield}
          style={{ width: '24px', height: '24px', marginRight: '10px' }}
        />
        <Typography variant="h6" component="div">
          Seguridad y conducción:
        </Typography>
      </div>
      <div>
        <ul>
          <li>
            <Typography variant="body1" component="div">
              Airbag frontal conductor
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Airbag frontal pasajero
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Airbag laterales delanteros
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Anclajes para sillas con sistema Isofix
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Antibloqueo de frenos (ABS)
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Control de crucero
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Dirección asistida electrohidráulica
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Faros HID
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Faros antiniebla
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Ordenador de a bordo Sólo en paquete
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Pretensores de cinturón con retractores limitadores de carga
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Retrovisores ext. térmicos
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Volante con ajuste horizontal
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Volante con ajuste vertical
            </Typography>
          </li>
        </ul>
      </div>
      <Divider />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          alt="comfort"
          src={comfort}
          style={{ width: '24px', height: '24px', marginRight: '10px' }}
        />
        <Typography variant="h6" component="div">
          Elementos de confort:
        </Typography>
      </div>
      <div>
        <ul>
          <li>
            <Typography variant="body1" component="div">
              Aire acondicionado
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Apertura electrónica del maletero
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Asiento del conductor con ajuste de altura
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Cierre centralizado
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Climatizador bizona
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Elevalunas electricos delanteros
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Mando de apertura a distancia
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Volante de cuero
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Volante de cuero retapizado
            </Typography>
          </li>
        </ul>
      </div>
      <Divider />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          alt="multimedia"
          src={multimedia}
          style={{ width: '24px', height: '24px', marginRight: '10px' }}
        />
        <Typography variant="h6" component="div">
          Sonido y multimedia:
        </Typography>
      </div>
      <div>
        <ul>
          <li>
            <Typography variant="body1" component="div">
              Manos libres Bluetooth
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Radio JVC con conexión Bluetooth, entrada Aux Jack 3.5 y USB
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component="div">
              Altavoces en perfecto estado
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default TabEquipment
