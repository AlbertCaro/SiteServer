import mongoose from "mongoose"

export default mongoose.model('User', new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
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