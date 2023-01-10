import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Index = () => {

  return (
    <Container>
        <Outlet/>
    </Container>
  )
}
