import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT!;
const DB = process.env.MONGO_URI!;

async function connect() {
  await mongoose.connect(DB);
  console.log("Db connect successfully");
}

connect().catch((e) => console.log(e));

app.listen(PORT, () => console.log("Server started on port: ", PORT));
