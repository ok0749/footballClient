import express from "express";

const router = express.Router();

router.get("/save", (req, res) => {
  res.render("stadiums-save");
});

export default router;
