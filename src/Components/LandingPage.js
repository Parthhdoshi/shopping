import { Box } from '@mui/material'
import React from 'react'

const LandingPage = () => {
  return (
        <>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mb: 2,
          width: "100%",
          height: "128",
        },
      }}
    >
      <img src={"https://preview.colorlib.com/theme/startup2/img/banner/banner.png.webp"} />
    </Box>
        </>
   )
}


export default LandingPage

