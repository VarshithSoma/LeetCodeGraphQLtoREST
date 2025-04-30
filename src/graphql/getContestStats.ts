export const GET_USER_CONTEST_STATS = `#graphql
    query userContestRankingInfo($username: String!) {
        userContestRanking(username: $username) {
            attendedContestsCount
            rating
            globalRanking
            totalParticipants
            topPercentage
            badge{
                name
            }
        }
    }
`;
