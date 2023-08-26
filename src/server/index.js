import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import colors from "colors"
import cors from "cors"
import userRoute from "../routes/user.js"
import connectionDB from "../config/connectionDB.js"
import postsRoute from "../routes/posts/posts.js"

// TODO: initialization to DB
connectionDB()

const app = express()
const PORT = process.env.PORT || 3000

// TODO: connect to PORT
dotenv.config()

// TODO: middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

// TODO: routes
app.use("/auth", userRoute)
app.use("/post", postsRoute)

// TODO: PORT listening 
app.listen(PORT)