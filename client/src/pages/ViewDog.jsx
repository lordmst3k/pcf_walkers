import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ViewDog = () => {
  const [dog, setDog] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5000/dog/${id}`)
      .then((response) => {
        setDog(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [id, setLoading])

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3x1 my-4">View Dog</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4">
          <div className="my-4">
            <span className="text-x1 mr-4 text-gray-500">Id</span>
            <span>{dog._id}</span>
          </div>
          <div className="my-4">
            <span className="text-x1 mr-4 text-gray-500">Name</span>
            <span>{dog.name}</span>
          </div>
          <div className="my-4">
            <span className="text-x1 mr-4 text-gray-500">Status</span>
            <span>{dog.status}</span>
          </div>
          <div className="my-4">
            <span className="text-x1 mr-4 text-gray-500">Added On</span>
            <span>{new Date(dog.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-x1 mr-4 text-gray-500">Last Updated</span>
            <span>{new Date(dog.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewDog
