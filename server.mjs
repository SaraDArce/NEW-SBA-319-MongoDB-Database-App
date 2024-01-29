import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());

import grades from "./routes/grades.mjs";
import posts from "./routes/posts.mjs";
import zips from "./routes/zips.mjs";

app.use("/grades", grades);
app.use("/zips", zips);
app.use("/posts", posts);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
