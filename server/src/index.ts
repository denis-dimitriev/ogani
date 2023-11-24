import app from "./app";
import config from "config";
import mongoose from "mongoose";

const PORT = config.get("server.port") as number;
const DB = config.get("db.mongoUri") as string;

async function connect() {
  await mongoose.connect(DB);
  console.log("Db connect successfully");
}

connect().catch((e) => console.log(e));

app.listen(PORT, () => console.log("Server started on port: ", PORT));
