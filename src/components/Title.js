import React from "react";

function Title({ openAdd }) {
  return (
    <div className="title">
      <h1>ToDo List</h1>
      <button onClick={() => openAdd((pre) => !pre)}>ADD</button>
    </div>
  );
}

export default Title;
