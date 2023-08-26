import { Router } from "express";
import { createUser, filterUsersCategories } from "../controllers/user.js";
import cacheInit from "../middlewares/cache.js";

const userRoute = Router()
const path = "/api"

userRoute.post(`${path}/register`, createUser)
userRoute.get(`${path}/filter/:carrera`, cacheInit, filterUsersCategories)

export default userRoute