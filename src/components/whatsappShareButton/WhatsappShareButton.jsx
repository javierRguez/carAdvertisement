/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import IconButton from '@mui/material/IconButton'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Paper from '@mui/material/Paper'
import { analytics, logEvent } from '../../utils/firebase'
import './style.css'

function WhatsappShareButton() {
  const onClickButton = () => {
    logEvent(analytics, 'user-send-whatsapp')
  }
  return (
    <Paper elevation={3} className="custom-paper">
      <div className="icon-container">
        <a
          href="whatsapp://send?text=Hey! mira este coche: https://mi-coche-ford.web.app/"
          data-action="share/whatsapp/share"
          target="_blank"
          rel="noreferrer"
          onClick={() => onClickButton()}
        >
          <IconButton variant="contained" color="primary" size="large">
            <WhatsAppIcon style={{ fill: 'white' }} />
          </IconButton>
        </a>
      </div>
    </Paper>
  )
}
export default WhatsappShareButton
