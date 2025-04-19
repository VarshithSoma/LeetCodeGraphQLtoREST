import { fetchUserProfile, fetchProblems } from "./services/userServices";

const main = async () => {
  try {
    //const data = await fetchUserProfile("varshithsoma");
    const problems = await fetchProblems("all-code-essentials", 20, 0, {});
    console.log(problems.problemsetQuestionList.questions);
  } catch (error) {
    console.error(error);
  }
};

main();
