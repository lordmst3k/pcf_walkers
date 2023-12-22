import express from 'express'
import { PORT, mongodbURL } from './config.js'
import mongoose from 'mongoose'
import { Dog } from './models/dogModel.js'
import { v4 as uuid } from 'uuid'
import { HasDogUpdateData } from './utils.js'
import dogRoute from './routes/dogRoute.js'
import dogsRoute from './routes/dogsRoute.js'
import cors from 'cors'

const app = express()

// Middleware for parsing request body
app.use(express.json())

// Middleware for handling CORS policy
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowHeaders: ['Content-Type'],
//   })
// )

// Temporary for development
app.use(cors())

app.get('/', (request, response) => {
  console.log(request)
  return response.status(234).send('You have full power, Captain!')
})

app.use('/dog', dogRoute)
app.use('/dogs', dogsRoute)

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`)
    })
  })
  .catch((error) => console.log(error))
