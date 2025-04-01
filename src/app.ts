import express from "express";
import taskRoutes from "./routes/task.routes";
import errorHandler from "./middleware/errorHandler";
import cors from "cors";

const app = express();
app.use(cors()); // Add this before any routes

app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.use(errorHandler);

export default app;
