import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  pinned: { type: Boolean, required: false },
  timestamp: { type: Date, required: true },
})

const dogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: String, required: true },
    gender: { type: String, required: false },
    pictureUrl: { type: String, required: false },
    rating: { type: String, required: false },
    comments: { type: [commentSchema], required: false },
    tags: { type: [String], required: false },
  },
  { timestamps: true }
)

// const { randomUUID } = require('crypto');
// randomUUID()

export const Dog = mongoose.model('Dog', dogSchema)
