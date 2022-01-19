/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Swipe from 'react-easy-swipe'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import './Carousel.css'

function Carousel({
  data,
  openLightBoxHandler,
  width,
  height,
  slideNumberStyle,
  radius,
  slideNumber,
  style,
  dots,
  pauseIconColor,
  pauseIconSize,
  slideBackgroundColor,
  slideImageFit,
  thumbnails,
  thumbnailWidth,
  showNavBtn = true,
}) {
  // Initialize States
  const [slide, setSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [change, setChange] = useState(0)

  // Function to change slide
  const addSlide = (n) => {
    if (slide + n >= data.length) setSlide(0)
    else if (slide + n < 0) setSlide(data.length - 1)
    else setSlide(slide + n)
  }

  function scrollTo(el) {
    const elLeft = el.offsetLeft + el.offsetWidth
    const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth

    // check if element not in view
    if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({ left: elLeft - elParentLeft, behavior: 'smooth' })
    } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({
        left: el.offsetLeft - el.parentNode.offsetLeft,
        behavior: 'smooth',
      })
    }
  }

  // Listens to slide state changes
  useEffect(() => {
    const slides = document.getElementsByClassName('carousel-item')
    const auxDots = document.getElementsByClassName('dot')

    const slideIndex = slide
    let i
    for (i = 0; i < data.length; i++) {
      slides[i].style.display = 'none'
    }
    for (i = 0; i < auxDots.length; i++) {
      auxDots[i].className = auxDots[i].className.replace(' active', '')
    }
    // If thumbnails are enabled
    if (thumbnails) {
      const thumbnailsArray = document.getElementsByClassName('thumbnail')
      for (i = 0; i < thumbnailsArray.length; i++) {
        thumbnailsArray[i].className = thumbnailsArray[i].className.replace(
          ' active-thumbnail',
          ''
        )
      }
      if (thumbnailsArray[slideIndex] !== undefined)
        thumbnailsArray[slideIndex].className += ' active-thumbnail'
      scrollTo(document.getElementById(`thumbnail-${slideIndex}`))
    }

    if (slides[slideIndex] !== undefined)
      slides[slideIndex].style.display = 'block'
    if (auxDots[slideIndex] !== undefined)
      auxDots[slideIndex].className += ' active'
  }, [slide, isPaused])

  return (
    <div style={style} className="box">
      <div
        style={{
          maxWidth: width || '600px',
          maxHeight: height || '400px',
        }}
      >
        <Swipe
          onSwipeRight={() => {
            addSlide(-1)
            setChange(!change)
          }}
          onSwipeLeft={() => {
            addSlide(1)
            setChange(!change)
          }}
        >
          <div
            className="carousel-container"
            style={{
              maxWidth: width || '600px',
              height: height || '400px',
              backgroundColor: slideBackgroundColor || 'darkgrey',
              borderRadius: radius,
            }}
          >
            {data.map((item1, index) => {
              return (
                <div
                  className="carousel-item fade"
                  style={{
                    maxWidth: width || '600px',
                    maxHeight: height || '400px',
                  }}
                  key={index}
                >
                  {slideNumber && (
                    <div className="slide-number" style={slideNumberStyle}>
                      {index + 1} / {data.length}
                    </div>
                  )}
                  <img
                    src={item1.image}
                    alt={item1.caption}
                    className="carousel-image"
                    style={{
                      borderRadius: radius,
                      objectFit: slideImageFit || 'cover',
                    }}
                  />
                  {isPaused && (
                    <div
                      className="pause-icon pause"
                      style={{
                        color: pauseIconColor || 'white',
                        fontSize: pauseIconSize || '40px',
                      }}
                    >
                      II
                    </div>
                  )}
                </div>
              )
            })}
            <a
              className="zoom"
              onClick={() => {
                openLightBoxHandler(true, slide)
              }}
            >
              <ZoomOutMapIcon />
            </a>
            {showNavBtn && (
              <a
                className="prev"
                onClick={() => {
                  addSlide(-1)
                  setChange(!change)
                }}
              >
                &#10094;
              </a>
            )}
            {showNavBtn && (
              <a
                className="next"
                onClick={() => {
                  addSlide(1)
                  setChange(!change)
                }}
              >
                &#10095;
              </a>
            )}
            {dots && (
              <div className="dots">
                {data.map((item, index) => {
                  return (
                    <span
                      className="dot"
                      key={index}
                      onClick={() => {
                        setSlide(index)
                        setChange(!change)
                      }}
                    />
                  )
                })}
              </div>
            )}
          </div>
        </Swipe>
      </div>
      {thumbnails && (
        <div
          className="thumbnails"
          id="thumbnail-div"
          style={{ maxWidth: width }}
        >
          {data.map((item, index) => {
            return (
              <img
                width={thumbnailWidth || '100px'}
                src={item.image}
                alt={item.caption}
                className="thumbnail"
                id={`thumbnail-${index}`}
                key={index}
                onClick={() => {
                  setSlide(index)
                  setChange(!change)
                }}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Carousel
