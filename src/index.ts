import { fetchUserProfile, fetchProblems } from "./services/userServices";
import axios from "axios";
import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
const PORT: number = Number(process.env.PORT);
const app = express();
app.get("/:username", async (req: Request, res: Response) => {
  try {
    const username: string = req.params["username"];
    const data = await fetchUserProfile(username);
    console.log(data + " " + username);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.get("/problems/:limit", async (req: Request, res: Response) => {
  try {
    const limit: number = Number(req.params["limit"]);
    const data = await fetchProblems("all-code-essentials", limit, 0, {});
    console.log(data + " " + limit);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
// const main = async () => {
//   try {
//     const data = await fetchUserProfile("");
//     // const problems = await fetchProblems("all-code-essentials", 20, 0, {});
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// main();
// const name: string = "varshith";
