import React, { useState } from 'react'
import './App.css'
import Typography from '@mui/material/Typography'
import CallIcon from '@mui/icons-material/Call'
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation'
import Button from '@mui/material/Button'
import Carousel from './components/carousel/Carousel'
import LightBox from './components/lightbox/LightBox '

function App() {
  const [toggle, setToggle] = useState(false)
  const [sIndex, setSIndex] = useState(0)

  const lightBoxHandler = (state, sIndexAux) => {
    setToggle(state)
    setSIndex(sIndexAux)
  }
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

  return (
    <div className="App">
      <LightBox
        state={toggle}
        event={lightBoxHandler}
        data={data}
        imageWidth="90vw"
        imageHeight="auto"
        setImageIndex={setSIndex}
        imageIndex={sIndex}
      />
      <Typography variant="h3" component="div" gutterBottom>
        SE VENDE
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Ford Focus TDCi Trend 1.6 110cv 2005
      </Typography>

      <div>
        <div style={{ textAlign: 'center' }}>
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
                maxHeight: '500px',
                margin: '0.35em auto',
              }}
            />
          </div>
        </div>
      </div>
      <Paper
        square
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <Button fullWidth variant="contained" endIcon={<CallIcon />}>
            Contacto
          </Button>
        </BottomNavigation>
      </Paper>
    </div>
  )
}

export default App
