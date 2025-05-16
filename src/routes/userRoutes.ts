import { Request, Response } from "express";
import express from "express";
import {
  fetchUserProfile,
  fetchProblems,
  fetchBadges,
  fetchUserSubmissions,
  fetchUserContestHistory,
  fetchAllUserContestData,
  fetchUserACSubmissions,
  fetchUserCalendar,
} from "../services/userServices";
import type { contest } from "../types/contest";

const router = express.Router();
router.get("/:username/getBadges", async (req: Request, res: Response) => {
  try {
    const username: string = req.params["username"];
    const data = await fetchBadges(username);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server Error" });
  }
});
router.get(
  "/:username/userSubmissions/:limit",
  async (req: Request, res: Response) => {
    try {
      const username: string = req.params["username"];
      const limit: number = Number(req.params["limit"]);
      const data = await fetchUserSubmissions(username, limit);
      console.log(limit + " " + username);
      res.status(200).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server Error" });
    }
  }
);
router.get(
  "/:username/acUserSubmissions/:limit",
  async (req: Request, res: Response) => {
    try {
      const username: string = req.params["username"];
      const limit: number = Number(req.params["limit"]);
      const data = await fetchUserACSubmissions(username, limit);
      res.status(200).send(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server Error" });
    }
  }
);
router.get(
  "/:username/allAttendedContests",
  async (req: Request, res: Response) => {
    try {
      const username: string = req.params["username"];
      const data = await fetchAllUserContestData(username);
      const attendedContests = data.userContestRankingHistory.filter(
        (contest: contest) => contest.attended
      );
      res.status(200).send(attendedContests);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server Error" });
    }
  }
);

router.get("/:username/allContests", async (req: Request, res: Response) => {
  try {
    const username: string = req.params["username"];
    const data = await fetchAllUserContestData(username);
    res.status(200).status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server Error" });
  }
});
router.get("/:username/userCalendar", async (req: Request, res: Response) => {
  try {
    const username: string = req.params["username"];
    const data = await fetchUserCalendar(username);
    res.status(200).status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server Error" });
  }
});
router.get("/:username", async (req: Request, res: Response) => {
  try {
    const username: string = req.params["username"];
    const data = await fetchUserProfile(username);
    console.log(data + " " + username);
    res.status(200).status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server Error" });
  }
});
export default router;
