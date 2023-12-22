import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const EditDog = () => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [rating, setRating] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5000/dog/${id}`)
      .then((response) => {
        setLoading(false)
        setName(response.data.name)
        setStatus(response.data.status)
        setGender(response.data.gender)
        setRating(response.data.rating)
      })
      .catch((error) => {
        setLoading(false)
        alert('An error has occurred. Please check console.')
        console.log(error)
      })
  }, [])

  const handleEditDog = () => {
    if (name === '' || status === '') {
      alert('Please enter required fields')
      return
    }

    const data = { name, status, gender, rating }
    setLoading(true)
    axios
      .put(`http://localhost:5000/dog/${id}`, data)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
        alert('An error has occurred; please check console')
      })
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3x1 my-4">Edit Dog</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-x1 mr-4 text-gray-500">Name*</label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-x1 mr-4 text-gray-500">Status*</label>
            <input
              type="text"
              value={status}
              required
              onChange={(e) => setStatus(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-x1 mr-4 text-gray-500">Gender</label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-x1 mr-4 text-gray-500">Rating</label>
            <input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleEditDog}>
            Save
          </button>
          <div className="my-4">
            <label className="text-x1 mr-4 text-gray-500">
              * Required Fields
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditDog
