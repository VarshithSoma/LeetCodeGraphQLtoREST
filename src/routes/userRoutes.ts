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
    res.send(data);
  } catch (error) {
    console.log(error);
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
      res.send(data);
    } catch (error) {
      console.log(error);
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
      res.send(data);
    } catch (error) {
      console.log(error);
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
      res.send(attendedContests);
    } catch (error) {
      console.log(error);
    }
  }
);

router.get("/:username/allContests", async (req: Request, res: Response) => {
  try {
    const username: string = req.params["username"];
    const data = await fetchAllUserContestData(username);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/:username/userCalendar", async (req: Request, res: Response) => {
  try {
    const username: string = req.params["username"];
    const data = await fetchUserCalendar(username);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
router.get("/:username", async (req: Request, res: Response) => {
  try {
    const username: string = req.params["username"];
    const data = await fetchUserProfile(username);
    console.log(data + " " + username);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
export default router;
