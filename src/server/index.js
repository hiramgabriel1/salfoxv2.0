import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import colors from "colors"
import cors from "cors"
import registerRoute from "../routes/register.js"

const app = express()
const PORT = process.env.PORT || 3000

dotenv.config()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

// TODO: routes
app.use("/auth", registerRoute)

app.listen(PORT)