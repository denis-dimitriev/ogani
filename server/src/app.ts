import express from "express";
import cors from "cors";
import morgan from "morgan";
import { productsRouter } from "./routes/products.route";
import { esersRouter } from "./routes/users.route";
import { categoriesRouter } from "./routes/categories.route";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/api/products", productsRouter);

app.use("/api/users", esersRouter);

app.use("/api/category", categoriesRouter);

export default app;
