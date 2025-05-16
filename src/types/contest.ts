export type contest = {
  attended: boolean;
  rating: Number;
  ranking: Number;
  trendDirection: string;
  problemsSolved: Number;
  totalProblems: Number;
  finishTimeInSeconds: Number;
  contest: {
    title: String;
    startTime: Number;
  };
};
