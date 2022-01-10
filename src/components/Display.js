import React from "react";
import Todos from "./Todos";
import { useSelector } from "react-redux";

function Display() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="line">
      {tasks.map((pre) => (
        <Todos
          key={pre.id}
          task={pre.task}
          reminder={pre.reminder}
          id={pre.id}
        />
      ))}
    </div>
  );
}

export default Display;
