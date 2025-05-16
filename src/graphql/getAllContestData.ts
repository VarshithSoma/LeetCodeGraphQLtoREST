export const USER_CONTEST_DATA_QUERY = `#graphql
  query userContestRankingHistory($username: String!) {
    userContestRankingHistory(username: $username) {
      attended
      rating
      ranking
      trendDirection
      problemsSolved
      totalProblems
      finishTimeInSeconds
      contest {
        title
        startTime
      }
    }
  }
`;
