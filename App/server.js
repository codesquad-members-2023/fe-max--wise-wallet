import express from "express";
import path from "path";
import { renderFile } from "ejs";

const __dirname = path.resolve();
const app = express();
app.use("/", express.static(__dirname + "/"));

app.set("view engine", "ejs");
app.engine("html", renderFile);

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("Thie server is listening on port 3000");
});
