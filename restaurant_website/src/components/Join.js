import React from 'react'
import '../styles/join.css'
import pasta from '../images/pasta.jpeg'
import {Container, Button } from 'react-bootstrap'

const Join = () => {
  return (
    <>
      <Container fluid className='my-5 w-75 d-flex flex-column align-items-center justify-content-center' id="join">
        <h3 className='my-2 text-light'>
          Join Us for Dinner
        </h3>
        <Button className='my-3' variant='dark'>
          Reservations
        </Button>
      </Container>
    </>
  )
}

export default Join