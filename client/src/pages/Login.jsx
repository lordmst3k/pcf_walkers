import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import Footer from '../components/Footer'

const ViewDog = () => {
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
      <h1 className="text-3x1 my-4">Login</h1>
      {loading ? <Spinner /> : <Footer />}
      <Footer />
    </div>
  )
}

export default ViewDog
