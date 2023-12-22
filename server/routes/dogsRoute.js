import express from 'express'
import { Dog } from '../models/dogModel.js'

const router = express.Router()

// Route to get all dogs from database
router.get('/', async (request, response) => {
  try {
    const dogs = await Dog.find({})
    response.status(200).json({
      count: dogs.length,
      data: dogs,
    })
  } catch (error) {
    console.log(error)
    response.status(500).send({ message: error.message })
  }
})

// Route to delete all dogs from the database - DEBUG ONLY
router.delete('/', async (request, response) => {
  try {
    await Dog.deleteMany({})
      .then(() => console.log('Data deleted'))
      .catch((error) => {
        console.log(error)
        response.status(500).send({ message: error.message })
      })
    return response.status(200)
  } catch (error) {
    console.log(error)
    response.status(500).send({ message: error.message })
  }
})

export default router
