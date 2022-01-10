import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { taskAdded } from "../features/taskSlice";

function Add() {
  const [task, setTask] = useState("");
  const [reminder, setReminder] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Please add ToDo!");
      return;
    }

    dispatch(
      taskAdded({
        id: nanoid(),
        task,
        reminder,
      })
    );

    setTask("");
    setReminder(false);
  };

  return (
    <div className="add-container">
      <form onSubmit={onSubmit}>
        <div className="add-text">
          <label>What you need to do?</label>
          <input
            type={"text"}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add here"
          />
        </div>
        <div className="reminder">
          <label>Add reminder</label>
          <input
            type={"checkbox"}
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <div className="btn">
          <input type={"submit"} value={"Save ToDo"} />
        </div>
      </form>
    </div>
  );
}

export default Add;
