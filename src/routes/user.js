import { Router } from "express";
import { createUser, filterUsersCategories, getUsers } from "../controllers/user.js";
import cacheInit from "../middlewares/cache.js";
import fileUpload from "express-fileupload";
// import { uploadFiles } from "../middlewares/multer.config.js";

const userRoute = Router()
const path = "/api"

userRoute.post(`${path}/register`, fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
}), createUser)
userRoute.get(`${path}/filter/:carrera`, cacheInit, filterUsersCategories)
userRoute.get(`${path}/index`, cacheInit, getUsers)

export default userRoute