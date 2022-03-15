import { useRecoilValue } from "recoil";

import { todoListStatsState } from "./selector";

export const useTodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    formattedPercentCompleted,
  };
};
