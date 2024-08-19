import {
  createBlogPersistence,
  getAllBlogsPersistence,
  getBlogByIDPersistence,
  updateBlogPersistence,
  deleteBlogPersistence,
} from "../persistence/blogPersistence.js";

export const createBlog = async (req, res) => {
  try {
    const blog = await createBlogPersistence(req.body);
    res.status(201).send(blog);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await getAllBlogsPersistence();
    res.status(200).send(blogs);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const getBlogByID = async (req, res) => {
  try {
    const blog = await getBlogByIDPersistence(req.params.id);
    if (!blog) return res.status(404).send({ error: "No Blog found" });
    res.status(200).send(blog);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await getBlogByIDPersistence(req.params.id);
    if (!blog) return res.status(404).send({ error: "No Blog found" });
    const updatedBlog = await updateBlogPersistence(req.params.id, req.body);
    res.status(200).send(updatedBlog);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await getBlogByIDPersistence(req.params.id);
    if (!blog) return res.status(404).send({ error: "No Blog Found" });
    await deleteBlogPersistence(req.params.id);
    res.status(200).send({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
