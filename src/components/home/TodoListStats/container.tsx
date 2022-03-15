import { useRecoilValue } from "recoil";

import { TodoListStats } from "./presenter";
import { todoListStatsState } from "./selector";

export const TodoListStatsContainer = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <TodoListStats
      total={totalNum}
      totalCompleted={totalCompletedNum}
      totalUncompleted={totalUncompletedNum}
      percentCompleted={formattedPercentCompleted}
    />
  );
};
