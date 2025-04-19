import { fetchUserProfile } from "./services/userServices";

const main = async () => {
  try {
    const data = await fetchUserProfile("varshithsoma");
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch user profile.");
  }
};

main();
