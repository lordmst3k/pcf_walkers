import * as React from 'react'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import DogCard from './DogCard'

const Gallery = ({ dogs }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {dogs.map((dog) => (
          <DogCard key={dog._id} dog={dog} />
        ))}
      </Grid>
    </Container>
  )
}

export default Gallery
