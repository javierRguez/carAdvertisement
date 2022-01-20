/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.css'
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

function App() {
  const [toggle, setToggle] = useState(false)
  const [sIndex, setSIndex] = useState(0)
  const [open, setOpen] = React.useState(false)
  const data = [
    {
      image: 'https://a.ccdn.es/cnet/2021/12/18/50840372/528052845_g.jpg',
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`,
    },
    {
      image: 'https://a.ccdn.es/cnet/2021/12/18/50840372/528052847_g.jpg',
      caption: 'Scotland',
    },
    {
      image: 'https://a.ccdn.es/cnet/2021/12/18/50840372/528052849_g.jpg',
      caption: 'Darjeeling',
    },
    {
      image: 'https://a.ccdn.es/cnet/2021/12/18/50840372/528052853_g.jpg',
      caption: 'San Francisco',
    },
    {
      image: 'https://a.ccdn.es/cnet/2021/12/18/50840372/528052857_g.jpg',
      caption: 'Scotland',
    },
    {
      image: 'https://a.ccdn.es/cnet/2021/12/18/50840372/528052862_g.jpg',
      caption: 'Darjeeling',
    },
    {
      image: 'https://a.ccdn.es/cnet/2021/12/18/50840372/528052865_g.jpg',
      caption: 'San Francisco',
    },
    {
      image: 'https://a.ccdn.es/cnet/2021/12/18/50840372/528052869_g.jpg',
      caption: 'Scotland',
    },
    {
      image: 'https://a.ccdn.es/cnet/2021/12/18/50840372/528052872_g.jpg',
      caption: 'Darjeeling',
    },
    {
      image: 'https://a.ccdn.es/cnet/2021/12/18/50840372/528052879_g.jpg',
      caption: 'Darjeeling',
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
    </div>
  )
}

export default App
