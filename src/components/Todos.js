import React from "react";
import { useDispatch } from "react-redux";
import { taskDeleted, taskToggle } from "../features/taskSlice";

function Todos({ task, reminder, id }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(taskDeleted(id));
  };

  const onToggle = () => {
    dispatch(taskToggle(id));
  };

  return (
    <div
      onDoubleClick={onToggle}
      className={`${reminder ? "reminder-true" : "reminder-false"}`}
    >
      <span>{task}</span>
      <button className="x" onClick={onDelete}></button>
    </div>
  );
}

export default Todos;
