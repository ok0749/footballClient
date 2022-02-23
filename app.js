import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";

import globalRouter from "./routes/global.js";
import stadiumsRouter from "./routes/stadiums.js";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const corsOptions = {
  origin: "http://localhost:8080",
  Credential: true,
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());

app.use("/", globalRouter);
app.use("/stadiums", stadiumsRouter);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(`footballClient app listening on port ${port}`)
  );
}

export default app;
