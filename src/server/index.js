import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import { PORT } from "../config/keys.js";
import userRoute from "../routes/user.js";
import connectionDB from "../config/mongoose.config.js";
import postsRoute from "../routes/posts/posts.js";
import router from "../routes/indexRoute.js";

// TODO: initialization to DB
connectionDB();

const app = express();

// TODO: connect to PORT
dotenv.config();

// TODO: middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// ! error handling
// app.use((req, res) => {
//   res.status(404).send("Recurso no encontrado");
// });

// TODO: routes
app.use("/auth", userRoute);
app.use("/post", postsRoute);
app.use("/", router)

// TODO: PORT listening
app.listen(PORT);