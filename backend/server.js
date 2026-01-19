import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// ==================
// App Configuration
// ==================

const app = express();
const PORT = process.env.PORT || 4000;

// ==================
// Database & Services
// ==================

connectDB();
connectCloudinary();

// ==================
// Middleware
// ==================

app.use(express.json());

// ✅ CORS configuration for Netlify frontend + admin
app.use(
  cors({
    origin: [
      "https://ecommerce-forever-shreyash.netlify.app",
      "https://ecommerce-shreyash-admin-forever.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);

// ==================
// API Routes
// ==================

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// ==================
// Health Check Route
// ==================

app.get("/", (req, res) => {
  res.status(200).send("API is working 🚀");
});

// ==================
// Server Start
// ==================

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
