import React, { useState } from "react";
import Title from "./components/Title";
import Add from "./components/Add";
import Display from "./components/Display";
import { useSelector } from "react-redux";

function App() {
  const [openAdd, setOpenAdd] = useState(true);
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="wrapper">
      <Title openAdd={setOpenAdd} />
      {openAdd && <Add />}
      {tasks.length > 0 ? (
        <Display />
      ) : (
        <div className="empty">Don't You Have Anyting ToDo?</div>
      )}
    </div>
  );
}

export default App;
