import { Container, Stack, Typography } from '@mui/material'
import React from 'react'

const NoPage = () => {
  return (
    <Container
      maxWidth="md"
      
      sx={{height:'100vh' ,display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography variant='h1'>404 Not Found</Typography>
    </Container>
  );
}

export default NoPage
