import { fetchUserProfile, fetchProblems } from "./services/userServices";
import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
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
