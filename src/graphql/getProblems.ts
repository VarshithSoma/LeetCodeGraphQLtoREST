export const GET_PROBLEMS_QUERY = `#graphql
query problemsetQuestionList(
  $categorySlug: String, 
  $limit: Int, 
  $skip: Int, 
  $filters: QuestionListFilterInput
) {
  problemsetQuestionList: questionList(
    categorySlug: $categorySlug
    limit: $limit
    skip: $skip
    filters: $filters
  ) {
    total: totalNum
    questions: data {
      title
      titleSlug
      acRate
      difficulty
      status
      isFavor
      hasSolution
      hasVideoSolution
      paidOnly: isPaidOnly
      frontendQuestionId: questionFrontendId
      topicTags {
        name
        id
        slug
      }
    }
  }
}`;
