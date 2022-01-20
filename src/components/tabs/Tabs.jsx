/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Tabs from '@mui/material/Tabs'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import SwipeableViews from 'react-swipeable-views'
import TabDescription from '../tabDescription/TabDescription'
import TabTechDetails from '../tabTechDetails/TabTechDetails'
import TabEquipment from '../tabEquipment/TabEquipment'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      style={{ textAlign: 'left' }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  )
}

const TabsComponent = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <>
      <Tabs variant="fullWidth" value={value} onChange={handleChange}>
        <Tab label="Descripción" />
        <Tab label="Ficha técnica" />
        <Tab label="Equipamiento" />
      </Tabs>
      <SwipeableViews
        containerStyle={{
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
        }}
        index={value}
        onChangeIndex={(index) => handleChangeIndex(index)}
      >
        <TabPanel value={value} index={0}>
          <TabDescription />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabTechDetails />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabEquipment />
        </TabPanel>
      </SwipeableViews>
    </>
  )
}
export default TabsComponent
