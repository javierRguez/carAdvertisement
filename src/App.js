/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import './App.css'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CallIcon from '@mui/icons-material/Call'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import Button from '@mui/material/Button'
import Carousel from './components/carousel/Carousel'
import LightBox from './components/lightbox/LightBox '
import Tabs from './components/tabs/Tabs'
import WhatsappShareButton from './components/whatsappShareButton/WhatsappShareButton'
import ContactModal from './components/contactModal/ContactModal'

const imgCar1 = require('./img/img_car_1.jpg')
const imgCar2 = require('./img/img_car_2.jpg')
const imgCar3 = require('./img/img_car_3.jpg')
const imgCar4 = require('./img/img_car_4.jpg')
const imgCar5 = require('./img/img_car_5.jpg')
const imgCar6 = require('./img/img_car_6.jpg')
const imgCar7 = require('./img/img_car_7.jpg')
const imgCar8 = require('./img/img_car_8.jpg')
const imgCar9 = require('./img/img_car_9.jpg')
const imgCar10 = require('./img/img_car_10.jpg')
const imgCar11 = require('./img/img_car_11.jpg')
const imgCar12 = require('./img/img_car_12.jpg')
const imgCar13 = require('./img/img_car_13.jpg')

function App() {
  const [toggle, setToggle] = useState(false)
  const [sIndex, setSIndex] = useState(0)
  const [open, setOpen] = React.useState(false)
  const data = [
    {
      image: imgCar1,
      caption: 'frontal 1 ford focus',
    },
    {
      image: imgCar2,
      caption: 'frontal 2 ford focus',
    },
    {
      image: imgCar3,
      caption: 'trasera 1 ford focus',
    },
    {
      image: imgCar4,
      caption: 'trasera 2 ford focus',
    },
    {
      image: imgCar5,
      caption: 'puerta piloto ford focus',
    },
    {
      image: imgCar6,
      caption: 'asiento piloto 1 ford focus',
    },
    {
      image: imgCar7,
      caption: 'asiento piloto 2 ford focus',
    },
    {
      image: imgCar8,
      caption: 'volante ford focus',
    },
    {
      image: imgCar9,
      caption: 'asiento copiloto 1 ford focus',
    },
    {
      image: imgCar10,
      caption: 'asiento copiloto 2 ford focus',
    },
    {
      image: imgCar11,
      caption: 'asiento trasero ford focus',
    },
    {
      image: imgCar12,
      caption: 'interior ford focus',
    },
    {
      image: imgCar13,
      caption: 'maletero ford focus',
    },
  ]

  const lightBoxHandler = (state, sIndexAux) => {
    setToggle(state)
    setSIndex(sIndexAux)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App" style={{ paddingBottom: '60px' }}>
      <Helmet>
        <title>Ford Focus (2005) - 3.255 €</title>
        <link rel="canonical" href="https://mi-coche-ford.web.app/" />
      </Helmet>
      <ContactModal closeModal={handleClose} open={open} />
      <LightBox
        state={toggle}
        event={lightBoxHandler}
        data={data}
        imageWidth="90vw"
        imageHeight="auto"
        setImageIndex={setSIndex}
        imageIndex={sIndex}
      />
      <Container maxWidth="md">
        <Typography variant="h4" component="div">
          SE VENDE
        </Typography>
        <div style={{ margin: '0 20px' }}>
          <Typography variant="h6" component="div" gutterBottom>
            Ford Focus TDCi Trend 1.6 110cv 2005
          </Typography>
        </div>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <Carousel
            data={data}
            openLightBoxHandler={lightBoxHandler}
            width="850px"
            height="500px"
            radius="10px"
            automatic={false}
            dots
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails
            thumbnailWidth="100px"
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: 'fit-content',
              margin: '0.7em auto',
              marginBottom: '1em',
            }}
          />
        </div>

        <div style={{ margin: '0 20px' }}>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h3" component="div" gutterBottom>
              3.255€
            </Typography>
          </div>
          <Tabs />
        </div>
        <WhatsappShareButton />
        <Paper
          square
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation>
            <Button
              fullWidth
              variant="contained"
              endIcon={<CallIcon />}
              onClick={handleClickOpen}
            >
              Contacto
            </Button>
          </BottomNavigation>
        </Paper>
      </Container>
    </div>
  )
}

export default App
