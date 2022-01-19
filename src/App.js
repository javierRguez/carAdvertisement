import './App.css'
import Typography from '@mui/material/Typography'

import Carousel from './components/carousel/Carousel'

function App() {
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <Typography variant="h3" component="div" gutterBottom>
        SE VENDE
      </Typography>

      <div className="App">
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '0 20px',
            }}
          >
            <Carousel
              onclickImage={() => console.log('dentro')}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
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
                margin: '40px auto',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
