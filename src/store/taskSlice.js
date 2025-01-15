import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    },
    reducers: {
        addTask(state, action) {
            // Using the spread operator to ensure proper state mutation tracking
            const newTask = action.payload;
            state.tasks = [...state.tasks, newTask];
            // Save the updated tasks to localStorage
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            // Save the updated tasks array to localStorage
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
    },
});

export const { addTask, deleteTask } = TaskSlice.actions;
export default TaskSlice.reducer;
