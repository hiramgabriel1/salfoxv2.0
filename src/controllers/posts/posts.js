import posts from "../../models/Posts.js";

// TODO: create a post
export const createPost = async (req, res) => {
  try {
    // ? obtener las publicaciones
    const { titlePost, description } = req.body;

    const dataPost = {
      titlePost,
      description,
    };

    // ? save in database
    const saveData = await posts.create(dataPost);

    if (saveData.satuts == 200) {
      res.json({ message: dataPost });
    }
  } catch (error) {
    throw new Error(error);
  }
};

// TODO: filter posts by title
export const filterPosts = async (req, res) => {
  try {
    const { titlePost } = req.params;

    const filterPostByTitle = await posts.find({
      $text: { $search: titlePost },
    });

    if (filterPostByTitle) {
      res.status(200).json({ message: filterPostByTitle });
    } else if (!filterPostByTitle || filterPostByTitle.length === 0) {
      res.status(404).json({ message: "no encontrado" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

// TODO: show all posts
export const showAllPosts = async (req, res) => {
  try {
    const dataPost = await posts.find();
    if (dataPost) {
      res.json({ message: dataPost });
    } else {
      res.status(500).json({ errorMessage: "Error del servidor" });
    }
  } catch (error) {
    throw new Error(error);
  }
};