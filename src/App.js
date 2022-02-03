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
import { analytics, logEvent } from './utils/firebase'
import Carousel from './components/carousel/Carousel'
import LightBox from './components/lightbox/LightBox '
import Tabs from './components/tabs/Tabs'
import WhatsappShareButton from './components/whatsappShareButton/WhatsappShareButton'
import ContactModal from './components/contactModal/ContactModal'
import useAnalytics from './hooks/useAnalytics'

function App() {
  const [toggle, setToggle] = useState(false)
  const [sIndex, setSIndex] = useState(0)
  const [open, setOpen] = React.useState(false)
  useAnalytics('user-view-home')
  const data = [
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_1.jpg',
      caption: 'frontal 1 ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_2.jpg',
      caption: 'frontal 2 ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_3.jpg',
      caption: 'trasera 1 ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_4.jpg',
      caption: 'trasera 2 ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_5.jpg',
      caption: 'puerta piloto ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_6.jpg',
      caption: 'asiento piloto 1 ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_7.jpg',
      caption: 'asiento piloto 2 ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_8.jpg',
      caption: 'volante ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_9.jpg',
      caption: 'asiento copiloto 1 ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_10.jpg',
      caption: 'asiento copiloto 2 ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_11.jpg',
      caption: 'asiento trasero ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_12.jpg',
      caption: 'interior ford focus',
    },
    {
      image: 'https://uanducto.sirv.com/Images/car/img_car_13.jpg',
      caption: 'maletero ford focus',
    },
  ]

  const lightBoxHandler = (state, sIndexAux) => {
    setToggle(state)
    setSIndex(sIndexAux)
  }

  const handleClickOpen = () => {
    logEvent(analytics, 'user-view-contactModal')
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
