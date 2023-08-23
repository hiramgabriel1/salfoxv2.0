import { Router } from "express";
import { createUser } from "../controllers/register.js";

const registerRoute = Router()

registerRoute.get("/register", createUser)

export default registerRoute