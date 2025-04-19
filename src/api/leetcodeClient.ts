import axios from "axios";

export const leetcodeClient = async (query: string, variables: object) => {
  try {
    const response = await axios.post(
      "https://leetcode.com/graphql",
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("LeetCode API error:", error);
    throw error;
  }
};
