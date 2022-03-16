import { useTodoListStats } from "./hook";
import { TodoListStats } from "./presenter";

export const TodoListStatsContainer = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, formattedPercentCompleted } =
    useTodoListStats();

  return (
    <TodoListStats
      total={totalNum}
      totalCompleted={totalCompletedNum}
      totalUncompleted={totalUncompletedNum}
      percentCompleted={formattedPercentCompleted}
    />
  );
};
