import { leetcodeClient } from "../api/leetcodeClient";
import { GET_USER_PROFILE_QUERY } from "../graphql/getUserProfile";

export const fetchUserProfile = async (username: string) => {
  return await leetcodeClient(GET_USER_PROFILE_QUERY, { username });
};
