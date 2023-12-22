import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddDog from './pages/AddDog'
import RemoveDog from './pages/RemoveDog'
import EditDog from './pages/EditDog'
import Home from './pages/Home'
import ViewDog from './pages/ViewDog'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dog/add" element={<AddDog />} />
      <Route path="/dog/edit/:id" element={<EditDog />} />
      <Route path="/dog/remove/:id" element={<RemoveDog />} />
      <Route path="/dog/view/:id" element={<ViewDog />} />
    </Routes>
  )
}

export default App
