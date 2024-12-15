import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import { connectToDB } from "./config/db.js";
import { router } from "./routes/question.route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;
const URI = process.env.URI;

app.use(express.json());

connectToDB(URI);

app.use(
  cors({
    origin: [process.env.CLIENT_PROD_URL, process.env.CLIENT_DEV_URL],
    methods: ["POST", "GET", "DELETE"],
  })
);

app.use(router);
app.use("/new", router);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
