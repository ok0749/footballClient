import express from "express";
import axios from "axios";

const router = express.Router();

async function findAllDesc() {
  await axios({
    method: "get",
    url: "http://localhost:8080/api/v1/stadiums",
    responseType: "json",
  });
}
router.get("/", async (req, res) => {
  const response = await axios.get("http://localhost:8080/api/v1/stadiums");
  const stadiums = response.data;

  res.render("index", stadiums);
});

export default router;
