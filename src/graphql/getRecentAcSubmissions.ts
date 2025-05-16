export const USER_AC_SUBMISSIONS_QUERY = `#graphql
    query recentAcSubmissions($username: String!, $limit: Int!){  
        recentAcSubmissionList(username: $username, limit: $limit) {    
            id   
            title   
            titleSlug    
            timestamp  
        }
    }    
`;
