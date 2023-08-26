import { Router } from "express";
import { createUser, filterUsersCategories, getUsers } from "../controllers/user.js";
import cacheInit from "../middlewares/cache.js";

const userRoute = Router()
const path = "/api"

userRoute.post(`${path}/register`, createUser)
userRoute.get(`${path}/filter/:carrera`, cacheInit, filterUsersCategories)
userRoute.get(`${path}/index`, cacheInit, getUsers)

export default userRoute