import { Router } from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogByID,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, createBlog);
router.get("/", authMiddleware, getAllBlogs);
router.get("/:id", authMiddleware, getBlogByID);
router.put("/:id", authMiddleware, updateBlog);
router.delete("/:id", authMiddleware, deleteBlog);

export default router;
