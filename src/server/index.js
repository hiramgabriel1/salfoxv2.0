import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import fileUpload from "express-fileupload";
import { PORT } from "../config/keys.js";
import userRoute from "../routes/user.js";
import connectionDB from "../config/mongoose.config.js";
import postsRoute from "../routes/posts/posts.js";

// TODO: initialization to DB
connectionDB();

const app = express();

// TODO: connect to PORT
dotenv.config();

// TODO: middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/uploads/",
  })
);

// TODO: routes
app.use("/auth", userRoute);
app.use("/post", postsRoute);

// TODO: PORT listening
app.listen(PORT);