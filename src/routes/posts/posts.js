import { Router } from "express";
import { createPost } from "../../controllers/posts/posts.js";
import cacheInit from "../../middlewares/cache.js";

const postsRoute = Router();
const path = "/api"

postsRoute.post(`${path}`, createPost)
postsRoute.get(`${path}/filter/:title`, cacheInit, )
export default postsRoute