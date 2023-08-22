import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { routeNotFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import router from "./routes/productRoutes.js";

connectDB();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", router);
app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is up and running on ${port}`));
