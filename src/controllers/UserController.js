import User from './../models/User'
import bcrypt from 'bcrypt'

export default {
  create: async (req, res) => {
    try {
      const password = bcrypt.hashSync(req.body.password, req.app.get('salt'))

      const user = new User({
        username: req.body.username,
        password: password,
        created_at: Date.now(),
        updated_at: Date.now()
      })

      const result = await user.save()

      res.json(result)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  update: async (req, res) => {
    try {
      const password = bcrypt.hashSync(req.body.password, req.app.get('salt'))

      const user = {
        password: password,
        updated_at: Date.now()
      }

      const result = await User.findByIdAndUpdate(req.params.id, user, { new: true })
      res.json(result)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  delete: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id)

      res.json(user)
    } catch (error) {
      error.status(400).send(error)
    }
  },

  show: async (req, res) => {
    try {
      const user = await User.findById(req.params.id)

      res.json(user)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  list: async (req, res) => {
    try {
      const users = await User.find()

      res.json(users)
    } catch (error) {
      res.status(400).send(error)
    }
  }
}