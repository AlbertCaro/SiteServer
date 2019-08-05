import mongoose from 'mongoose'

export default mongoose.model('Info', new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  }
}))