import express, { Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import studentRoutes from "./routes";
import path from "path";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 5000;

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection failed:", error));

// Set the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));
app.use(express.static(path.join(__dirname, "../public")));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
app.use("/", studentRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
