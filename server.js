const express = require("express");
const app = express();
const router = require("./routes");
const public = __dirname + "/public/";
const port = process.env.PORT || 5000;

app.use(express.json());

// * catch file router
app.use(router);

// * catch file at folder public
app.use("/", express.static(public));

// *error 404
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "Failed",
    message: "Resource" + req.originalUrl + "Not Found",
  });
});

// * viewed on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`));
