import express from 'express'
import { Dog } from '../models/dogModel.js'

const router = express.Router()

// Route to get all dogs from database
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const dog = await Dog.findById(id)
    response.status(200).json(dog)
  } catch (error) {
    console.log(error)
    response.status(500).send({ message: error.message })
  }
})

// Route to add a new dog to the database
router.post('/', async (request, response) => {
  try {
    if (!request.body.name) {
      return response
        .status(400)
        .send({ message: 'Missing required field: name' })
    } else if (!request.body.status) {
      return response
        .status(400)
        .send({ message: 'Missing required field: status' })
    }
    const newDog = {
      name: request.body.name,
      status: request.body.status,
      created: Date(),
    }
    const dog = await Dog.create(newDog)
    return response.status(200).send(dog)
  } catch (error) {
    console.log(error)
    response.status(500).send({ message: error.message })
  }
})

// Route to update a dog in the database
router.put('/:id', async (request, response) => {
  try {
    if (!HasDogUpdateData(request)) {
      return response.status(400).send({ message: 'Missing required fields' })
    }
    const { id } = request.params
    const result = await Dog.findByIdAndUpdate(id, request.body)
    if (!result) {
      return response.status(404).send({ message: 'Dog not found' })
    }
    const dog = await Dog.findById(id)
    response.status(200).json(dog)
  } catch (error) {
    console.log(error)
    response.status(500).send({ message: error.message })
  }
})

// Route to delete a dog from the database
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const result = await Dog.findByIdAndDelete(id)
    if (!result) {
      return response.status(404).send({ message: 'Dog not found' })
    }
    response.status(200).send({ message: 'Dog removed from database' })
  } catch (error) {
    console.log(error)
    response.status(500).send({ message: error.message })
  }
})

export default router
