import express from "express";
import cors from "cors";
import morgan from "morgan";
import { productsRouter } from "./routes/products.route";
import { userRouter } from "./routes/users.route";
import { categoriesRouter } from "./routes/categories.route";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/products", productsRouter);

app.use("/api/users", userRouter);

app.use("/api/category", categoriesRouter);

export default app;
