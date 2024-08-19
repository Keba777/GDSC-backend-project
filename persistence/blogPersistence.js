import Blog from "../models/blog.js";

export const createBlogPersistence = async (blog) => {
  try {
    const newBlog = new Blog(blog);
    const createdBlog = await newBlog.save();
    return createdBlog;
  } catch (error) {
    throw new Error("Failed to create blog: " + error.message);
  }
};

export const getAllBlogsPersistence = async () => {
  try {
    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    throw new Error("Failed to retrieve blogs: " + error.message);
  }
};

export const getBlogByIDPersistence = async (id) => {
  try {
    const blog = await Blog.findById(id);
    return blog;
  } catch (error) {
    throw new Error("No Blog found: " + error.message);
  }
};

export const updateBlogPersistence = async (id, blog) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, blog);
    return updatedBlog;
  } catch (error) {
    throw new Error("Failed to update blog: " + error.message);
  }
};

export const deleteBlogPersistence = async (id) => {
  try {
    const blog = await Blog.findByIdAndDelete(id);
    return blog;
  } catch (error) {
    throw new Error("Failed to delete blog: " + error.message);
  }
};
