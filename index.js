import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import blogRoutes from "./routes/blogRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/blogs", blogRoutes);
app.use("/api", userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, console.log("Server listening on port " + port));
