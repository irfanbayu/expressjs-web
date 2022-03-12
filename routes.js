const router = require("express").Router();
const path = require("path");
const view = __dirname + "/views/";

// * catch file at folder views
router.get("/", (req, res) => {
  res.sendFile(path.join(view + "portofolio.html"));
});

// * catch data json
router.post("/socmed/", (req, res) => {
  const { twitter, fb, ig } = req.body;
  res.json({
    twitter,
    fb,
    ig,
  });
});

module.exports = router;
