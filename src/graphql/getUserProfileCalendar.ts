export const GET_USER_CALENDAR = `#graphql 
query userProfileCalendar($username: String!, $year: Int) 
    {  matchedUser(username: $username) {   
      userCalendar(year: $year) {     
       activeYears      
       streak      
       totalActiveDays      
       dccBadges {        
       timestamp        
       badge {          
       name          
       icon        
       }      
       }      
       submissionCalendar    
       }
    }
}    `;
