import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import Footer from '../components/Footer'

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
      <div className="flex justify-between items-center">
        <h1 className="text-3x1 my-8">Dogs List</h1>
        <Link to="/dog/add">
          <MdOutlineAddBox className="text-sky-800 text-4x1" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">#</th>
              <th className="border border-slate-600 rounded-md">Name</th>
              <th className="border border-slate-600 rounded-md">Status</th>
              <th className="border border-slate-600 rounded-md">Gender</th>
              <th className="border border-slate-600 rounded-md">Rating</th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {dogs.map((dog, index) => (
              <tr key={dog._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {dog.name}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {dog.status}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {dog.gender}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {dog.rating}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/dog/view/${dog._id}`}>
                      <BsInfoCircle className="text-2x1 text-green-800" />
                    </Link>
                    <Link to={`/dog/edit/${dog._id}`}>
                      <AiOutlineEdit className="text-2x1 text-yellow-600" />
                    </Link>
                    <Link to={`/dog/remove/${dog._id}`}>
                      <MdOutlineDelete className="text-2x1 text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Footer />
    </div>
  )
}

export default Home
