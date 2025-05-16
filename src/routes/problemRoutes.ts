import { Request, Response } from "express";
import express from "express";
import { fetchProblems } from "../services/userServices";

const router = express.Router();
router.get("/problems/:limit", async (req: Request, res: Response) => {
  try {
    const limit: number = Number(req.params["limit"]);
    const data = await fetchProblems("all-code-essentials", limit, 0, {});
    console.log(data + " " + limit);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
export default router;
