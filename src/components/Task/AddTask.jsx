import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from '../../store/taskSlice';

export default function AddTask() {
    const [input, setInput] = useState({
        task: "",
        priority: "low"
    });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        console.log("Add Task Button Clicked"); // Log button click
        setLoading(true);
        // Use setTimeout for a delayed dispatch
        setTimeout(() => {
            const taskData = {
                id: Date.now().toString(),
                task: input.task.trim(),
                priority: input.priority,
                createdAt: new Date().toISOString(),
            };
            console.log("Dispatching Task:", taskData); // Log the task data before dispatch
            setInput({
                task: "",
                priority: ""
            });
            dispatch(addTask(taskData));  // Dispatch the addTask action
            setLoading(false);
        }, 3000); // Delay for 3 seconds
    }

    return (
        <div className="w-full h-[176px] flex flex-col items-start justify-start gap-3 px-8">
            <form onSubmit={handleAddTask}>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    placeholder="Add Task"
                    sx={{ "width": "65vw", }}
                    name="task"
                    value={input.task}
                    onChange={handleInput}
                />
                <select
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="priority"
                    value={input.priority}
                    onChange={handleInput}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <div className="w-full mt-[0.3rem] flex flex-row justify-between items-center">
                    <div className="flex items-center gap-4">
                        <i className="ri-notification-4-fill"></i>
                        <i className="ri-calendar-event-line"></i>
                    </div>
                    <button type='submit' className="text-[white] bg-[#16404D] p-3 rounded-[5px]">
                        {loading ? "Adding.." : "Add Task"}
                    </button>
                </div>
            </form>
        </div>
    )
}
