import express from "express";
import {
  getProducts,
  getProductsById,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.route("/").get(getProducts);
productRouter.route("/:id").get(getProductsById);

export default productRouter;
