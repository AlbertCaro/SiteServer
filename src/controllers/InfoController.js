import Info from './../models/Info'

export default {
  create: async (req, res) => {
    try {
      const info = new Info({
        name: req.body.name,
        created_at: Date.now(),
        updated_at: Date.now()
      })

      const result = await info.save()

      res.json(result)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  update: async (req, res) => {
    try {
      const info = {
        name: req.body.name,
        updated_at: Date.now()
      }

      const result = await Info.findByIdAndUpdate(req.params.id, info, { new: true })
      res.json(result)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  delete: async (req, res) => {
    try {
      const info = await Info.findByIdAndDelete(req.params.id)

      res.json(info)
    } catch (error) {
      error.status(400).send(error)
    }
  },

  show: async (req, res) => {
    try {
      const info = await Info.findById(req.params.id)

      res.json(info)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  list: async (req, res) => {
    try {
      const infos = await Info.find()

      res.json(infos)
    } catch (error) {
      res.status(400).send(error)
    }
  }
}