export const USER_SUBMISSIONS_QUERY = `#graphql
    query getUserSubmissions($username: String!,$limit: Int!){
        recentSubmissionList(username: $username,limit:$limit) {
            title
            titleSlug
            timestamp
            statusDisplay
            lang
        }
    }
`;
