import axios from "axios";
export const leetcodeClient = async (query: string, variables: object) => {
  try {
    const response = await axios.post("https://leetcode.com/graphql", {
      query,
      variables,
    });
  } catch (error) {
    console.log(error);
  }
};
