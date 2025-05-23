import { leetcodeClient } from "../api/leetcodeClient";
import { GET_USER_PROFILE_QUERY } from "../graphql/getUserProfile";
import { GET_PROBLEMS_QUERY } from "../graphql/getProblems";
import { GET_USER_BADGES_QUERY } from "../graphql/getBadges";
import { USER_SUBMISSIONS_QUERY } from "../graphql/getRecentSubmissions";
import { GET_USER_CONTEST_STATS } from "../graphql/getContestStats";
import { USER_CONTEST_DATA_QUERY } from "../graphql/getAllContestData";
import { USER_AC_SUBMISSIONS_QUERY } from "../graphql/getRecentAcSubmissions";
import { GET_USER_CALENDAR } from "../graphql/getUserProfileCalendar";
export const fetchUserProfile = async (username: string) => {
  return await leetcodeClient(GET_USER_PROFILE_QUERY, { username });
};
export const fetchProblems = async (
  categorySlug: string,
  limit: number,
  skip: number,
  filters: object
) => {
  return await leetcodeClient(GET_PROBLEMS_QUERY, {
    categorySlug,
    skip,
    limit,
    filters,
  });
};
export const fetchBadges = async (username: string) => {
  return await leetcodeClient(GET_USER_BADGES_QUERY, { username });
};
export const fetchUserSubmissions = async (username: string, limit: number) => {
  return await leetcodeClient(USER_SUBMISSIONS_QUERY, {
    username,
    limit,
  });
};
export const fetchUserACSubmissions = async (
  username: string,
  limit: number
) => {
  return await leetcodeClient(USER_AC_SUBMISSIONS_QUERY, {
    username,
    limit,
  });
};
export const fetchUserCalendar = async (username: string) => {
  return await leetcodeClient(GET_USER_CALENDAR, { username });
};
export const fetchUserContestHistory = async (username: string) => {
  return await leetcodeClient(GET_USER_CONTEST_STATS, {
    username,
  });
};
export const fetchAllUserContestData = async (username: string) => {
  return await leetcodeClient(USER_CONTEST_DATA_QUERY, { username });
};
