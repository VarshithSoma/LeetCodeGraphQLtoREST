import { leetcodeClient } from "../api/leetcodeClient";
import { GET_USER_PROFILE_QUERY } from "../graphql/getUserProfile";
import { GET_PROBLEMS_QUERY } from "../graphql/getProblems";
import { GET_USER_BADGES_QUERY } from "../graphql/getBadges";
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
