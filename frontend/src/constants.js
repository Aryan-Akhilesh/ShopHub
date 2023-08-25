const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

const PRODUCTS_URL = "/api/products";
const USERS_URL = "/api/users";
const ORDERS_URL = "/api/orders";
const PAYPAL_URL = "/api/config/paypal";
