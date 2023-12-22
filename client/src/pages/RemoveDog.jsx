import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const RemoveDog = () => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  const handleRemoveDog = () => {
    setLoading(true)
    if (status === 'adopted' || status === 'moving') {
      const data = { status }
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
    } else {
      axios
        .delete(`http://localhost:5000/dog/${id}`)
        .then(() => {
          setLoading(false)
          navigate('/')
        })
        .catch((error) => {
          setLoading(false)
          console.log(error)
          alert('An error has occured. Please check the console')
        })
    }
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3x1 my-4">Remove Dog</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto">
          <div className="my-4">
            <label className="text-x1 mr-4 text-gray-500">
              Reason for removal:
            </label>
            <input
              type="text"
              value={status}
              required
              onChange={(e) => setStatus(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button
            className="p-2 bg-red-600 text-white m-8"
            onClick={handleRemoveDog}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  )
}

export default RemoveDog
