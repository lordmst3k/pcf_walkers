import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const AddDog = () => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [gender, setGender] = useState('')
  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')
  const [pinned, setPinned] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSaveDog = () => {
    if (name === '' || status === '') {
      alert('Please enter required fields')
      return
    }
    let comment_data
    if (comment.length > 0) {
      comment_data = {
        text: comment,
        pinned,
        timestamp: new Date().toString(),
      }
    }
    const data = { name, status, gender, rating, comment: comment_data }

    setLoading(true)
    axios
      .post('http://localhost:5000/dog', data)
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
      <h1 className="text-3x1 my-4">Add New Dog</h1>
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
          <div className="my-4">
            <label className="text-x1 mr-4 text-gray-500">Comment</label>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
            <input
              id="pinnedCheckbox"
              type="checkbox"
              value={pinned}
              disabled={comment.length === 0}
              onChange={(e) => setPinned(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2"
            />
            <label
              disabled={comment.length === 0}
              htmlFor="pinnedCheckbox"
              className="text-x1 ml-2 text-gray-500"
            >
              <span className="fa fa-check">Pin Comment</span>
            </label>
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleSaveDog}>
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

export default AddDog
