import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import router from "./routes/productRoutes.js";

connectDB();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", router);

app.listen(port, () => console.log(`Server is up and running on ${port}`));
