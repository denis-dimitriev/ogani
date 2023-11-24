import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { productsRouter } from "./routes/products.route";
import { userRouter } from "./routes/users.route";
import { categoriesRouter } from "./routes/categories.route";
import { errorHandler, notFound } from "./middlewares/error-middleware";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(cookieParser());

app.use("/api/products", productsRouter);

app.use("/api/users", userRouter);

app.use("/api/category", categoriesRouter);

app.all("*", notFound);

app.use(errorHandler);

export default app;
