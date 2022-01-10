import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    task: "Do someting",
    reminder: false,
  },
  {
    id: 2,
    task: "Write code",
    reminder: true,
  },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskAdded(state, action) {
      return [...state, action.payload];
      // state.push(action.payload);
    },
    taskDeleted(state, action) {
      return state.filter((pre) => pre.id !== action.payload);
    },
    taskToggle(state, action) {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, reminder: !item.reminder }
          : item
      );
    },
  },
});

export const { taskAdded, taskDeleted, taskToggle } = taskSlice.actions;

export default taskSlice.reducer;
