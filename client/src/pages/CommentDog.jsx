import react, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const CommentDog = () => {
  const [dog, setDog] = useState({})
  const [comment, setComment] = useState('')
  const [pinned, setPinned] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5000/dogs/${id}`)
      .then((response) => {
        setDog(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [id, setDog, setLoading])

  const handleSaveComment = () => {
    if (comment.length === 0) {
      setLoading(false)
      navigate('/')
    }
    let comment_data
    if (comment.length > 0) {
      comment_data = {
        text: comment,
        pinned,
        timestamp: new Date().toString(),
      }
    }
    const data = { comment: comment_data }

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
      <h1 className="text-3x1 my-4">Add comments about ${dog.name}</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto">
          <div className="my-4">
            <textarea
              rows={3}
              value={comment}
              maxLength={200}
              placeholder="Add your comment"
              onChange={(e) => setComment(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
            <input
              id="pinnedCheckbox"
              type="checkbox"
              value={pinned}
              onChange={(e) => setPinned(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2"
            />
            <label
              htmlFor="pinnedCheckbox"
              className="text-x1 ml-2 text-gray-500"
            >
              <span className="fa fa-check">Pin Comment</span>
            </label>
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleSaveComment}>
            Save
          </button>
        </div>
      )}
    </div>
  )
}

export default CommentDog
