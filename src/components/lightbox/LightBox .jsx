/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React from 'react'
import './style.css'

import { ReactComponent as Close } from './close.svg'

function LightBox({
  state,
  event,
  data,

  imageWidth = '50vw',

  setImageIndex,
  imageIndex,
}) {
  if (state) {
    return (
      <div className="reactLightboxContainer">
        <div className="reactLightboxCloseButtonContainer">
          <button
            className="reactLightboxCloseButton"
            onClick={() => {
              event(false, imageIndex)
              setImageIndex(0)
              document.body.style.overflow = 'auto'
            }}
          >
            <Close fill="#fff" />
          </button>
        </div>
        <div className="reactLightboxArea">
          <img
            src={data[imageIndex].image}
            alt={data.title}
            style={{
              height: 'auto',

              maxHeight: '95vh',
              maxWidth: imageWidth,
            }}
          />
        </div>
      </div>
    )
  }

  return null
}
export default LightBox
