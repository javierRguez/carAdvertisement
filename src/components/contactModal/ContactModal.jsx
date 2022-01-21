/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { init, send } from '@emailjs/browser'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import congrats from '../../img/congrats.png'

init('user_JKfBhZ00Kpk0uwPp4bCv6')

function AlertDialog({ closeModal, open }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [modalState, setModalState] = useState(0)
  const handlerOnClose = () => {
    closeModal()
    setModalState(0)
    setName('')
    setEmail('')
    setPhone('')
  }

  const handleSend = () => {
    send('service_tc3snwu', 'template_wd1w289', {
      email,
      name,
      phone,
    }).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text)
      },
      (error) => {
        console.log('FAILED...', error)
      }
    )
    setModalState(1)
  }

  return (
    <Dialog
      open={open}
      onClose={() => {
        handlerOnClose()
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="dialog-container"
    >
      {modalState > 0 ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto 0',
          }}
        >
          <img
            alt="congrats"
            src={congrats}
            style={{ width: '150px', height: '150px', marginRight: '10px' }}
          />
          <DialogTitle id="alert-dialog-title">
            <Typography align="center" variant="h6" component="div">
              Enhorabuena!
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              gutterBottom
              align="center"
              id="alert-dialog-description"
            >
              En breve nos pondremos en contacto con usted
            </DialogContentText>
            <DialogActions style={{ justifyContent: 'center' }}>
              <Button
                variant="contained"
                onClick={() => {
                  handlerOnClose()
                }}
              >
                Aceptar
              </Button>
            </DialogActions>
          </DialogContent>
        </div>
      ) : (
        <>
          <DialogTitle id="alert-dialog-title">
            <Typography align="center" variant="h6" component="div">
              Gracias por su interes!
            </Typography>
          </DialogTitle>
          <DialogContent
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <DialogContentText align="center" id="alert-dialog-description">
              Puede llamar a este número
            </DialogContentText>
            <Typography align="center" variant="h6" component="div">
              <a href="tel:653842014">653842014</a>
            </Typography>
            <DialogContentText
              gutterBottom
              align="center"
              id="alert-dialog-description"
            >
              o si lo desea, puede facilitarnos la siguiente información y
              nosotros nos pondremos en contacto con usted
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autocomplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  size="small"
                  id="outlined-full-width"
                  label="Nombre"
                  placeholder=""
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autocomplete="off"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  size="small"
                  id="outlined-full-width"
                  label="Email"
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  autocomplete="off"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  size="small"
                  fullWidth
                  id="outlined-full-width"
                  label="Teléfono"
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <div />
          </DialogContent>
          <DialogActions>
            <Button variant="text" onClick={closeModal}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              disabled={!name || (!email && !phone)}
              onClick={() => handleSend()}
            >
              Enviar
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}
export default AlertDialog
