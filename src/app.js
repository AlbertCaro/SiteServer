import express from "express"
import morgan from "morgan"
import cors from "cors"
import InfoRoutes from "./routes/InfoRoutes"
import UserRoutes from "./routes/UserRoutes"
import LoginRoutes from "./routes/LoginRoutes"
import HomeRoutes from "./routes/HomeRoutes"
import config from "./config"

const app = express()

app.set('secret', config.secret)
app.set('salt', config.bcryptSalt)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(LoginRoutes)
app.use(InfoRoutes)
app.use(UserRoutes)
app.use(HomeRoutes)

export default app