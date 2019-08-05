import User from './../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default {
  singin: (req, res) => {
    try {
      User.findOne({
        name: req.body.name
      }, (err, user) => {
        if (err) throw err

        if (!user) {
          res.json({ success: false, message: 'Autenticación fallida: Usuario no encontrado.' })
        }

        else if (user) {
          
          if (!bcrypt.compareSync(req.body.password, user.password)) {
            res.json({ success: false, message: 'Autenticación fallida: Contraseña inválida.' })
          } else {
            const token = jwt.sign({ user }, req.app.get('secret'))
            res.json({
              success: true,
              message: 'Token obtenido correctamente.',
              token: token
            })
          }
        }
      })
    } catch (error) {
      res.status(400).send(error)
    }
  }
}