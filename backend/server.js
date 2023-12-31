import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { routeNotFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

connectDB();

const app = express();
const port = process.env.PORT || 8000;

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is up and running on ${port}`));
