import { Router } from "express";
import { createPost, filterPosts } from "../../controllers/posts/posts.js";
import { showAllPosts } from "../../controllers/posts/posts.js";
import cacheInit from "../../middlewares/cache.js";

const postsRoute = Router();
const path = "/api"

postsRoute.post(`${path}/submit`, createPost)
postsRoute.get(`${path}/filter/:titlePost`, cacheInit, filterPosts)
postsRoute.get(`${path}/all`, cacheInit, showAllPosts)

export default postsRoute