const express = require("express");
const app = express();
const router = require("./routes");
const public = __dirname + "/public/";

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

// * viewed at http://localhost:3000
app.listen(3000, () => console.log("Server http://localhost:3000"));
