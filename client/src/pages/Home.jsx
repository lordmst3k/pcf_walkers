import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
// import { Link } from 'react-router-dom'
// import { MdOutlineAddBox } from 'react-icons/md'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import { CssBaseline } from '@mui/material'

const Home = () => {
  const [dogs, setDogs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5000/dogs')
      .then((response) => {
        setDogs(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [setLoading])

  return (
    <div className="p-4">
      <CssBaseline />
      <TopBar />
      <main>
        <Header />
      </main>
      <div className="flex justify-between items-center">
        {/* <Link to="/dog/add">
          <MdOutlineAddBox className="text-sky-800 text-4x1" />
        </Link> */}
      </div>
      {loading ? <Spinner /> : <Gallery dogs={dogs} />}
      <Footer />
    </div>
  )
}

export default Home
