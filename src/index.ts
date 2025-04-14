import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("TypeScript with nodejs");
});
app.listen(8000, () => console.log("server running at port 8000"));
