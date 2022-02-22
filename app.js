import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/stadiums/save", (req, res) => {
  res.render("stadiums-save");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(`footballClient app listening on port ${port}`)
  );
}

export default app;
