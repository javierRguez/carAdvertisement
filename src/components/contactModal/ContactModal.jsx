/* eslint-disable react/prop-types */
import React, { useState } from 'react'
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

  return (
    <Dialog
      open={open}
      onClose={() => {
        handlerOnClose()
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="pruebamio"
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
            <DialogContentText
              gutterBottom
              align="center"
              id="alert-dialog-description"
            >
              Para poder ponernos en contacto con usted, necesitamos que nos
              facilite la siguiente información
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
              onClick={() => setModalState(1)}
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
