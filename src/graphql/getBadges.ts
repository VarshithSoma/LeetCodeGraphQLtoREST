export const GET_USER_BADGES_QUERY = `#graphql
    query getUserBadges($username: String!){
        matchedUser(username:$username){
            badges {
                id
                displayName
                icon
                creationDate
            }
            upcomingBadges {
                name
                icon
            }
            activeBadge {
                id
                displayName
                icon
                creationDate
            }
        }
    }
`;
