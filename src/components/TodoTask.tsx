import React, { FC } from "react";
import { Itask } from "../interfaces";

interface Props {
  task: Itask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadLine}</span>
      </div>
      <button onClick={() => completeTask(task.taskName)}>X</button>
    </div>
  );
};

export default TodoTask;
