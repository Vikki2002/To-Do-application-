import { useState } from "react"
import 'remixicon/fonts/remixicon.css'
import Divider from '@mui/material/Divider';
import AddTask from "../Task/AddTask";
import { useSelector, useDispatch } from "react-redux";
import { AlertCircle, Trash2 } from 'lucide-react';
import { deleteTask } from "../../store/taskSlice";
import Backdrop from '@mui/material/Backdrop';
import ResponsiveDatePickers from '../DatePicker/DatePicker';



export default function RightSide() {
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState(false);
    const tasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high':
                return 'bg-red-100 text-red-800';
            case 'medium':
                return 'bg-yellow-100 text-yellow-800';
            case 'low':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setSelect(false);
    };

    return (<>
        <div id="right-side" className="lg:w-[70vw] md:w-[60vw] flex flex-col items-start gap-4  background-color rounded-lg shadow-lg">
            <button onClick={handleClick} className="px-3 m-3">
                TO DO
                <span className="ml-4">{open ? <i className="ri-arrow-down-s-fill"></i> : <i className="ri-arrow-up-s-fill"></i>}</span>
            </button>
            {open && <div>
                <AddTask />
            </div>}

            <div className="px-3 w-full mt-4">
                <h2 className="text-[20px] font-normal font-rye">Pending Task</h2>
                <div className="flex flex-col items-start gap-4 w-full h-[300px] mt-2 rounded-[5px] overflow-css">
                    <ul className="list-none flex flex-col gap-3 p-[2rem]">
                        {tasks.map((task) => (
                            <div key={task.id} id="individualTask">
                                <li className="flex flex-row justify-between gap-4 px-[30px]">
                                    <div className="flex flex-row items-center gap-8">
                                        <i className="ri-checkbox-blank-line text-[20px] cursor-pointer"></i>
                                        <span className="individualTask cursor-pointer text-[#16404D] font-bold w-[100px] overflow-hidden"
                                            onClick={() => setSelect(true)}
                                        >
                                            {task.task}
                                        </span>
                                    </div>
                                    <span className={`cursor-pointer px-2 py-1 rounded-full text-sm font-medium ${getPriorityColor(task.priority)}`}>
                                        <AlertCircle className="h-4 w-4 inline" />
                                        {task.priority}
                                    </span>
                                    <button
                                        onClick={() => dispatch(deleteTask(task.id))}
                                        className="cursor-pointer p-2 text-red-600 hover:bg-red-100 rounded-full"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                    <i className="ri-star-line text-[20px]"></i>
                                </li>
                                <Divider variant="middle" sx={{ "width": "65vw", "marginLeft": "6px", "marginTop": "6px" }} component="li" />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="px-3 w-[100%]">
                <h2>Completed Task</h2>
                <div className="w-[100%] flex flex-col items-start gap-4 h-[300px] mt-2 rounded-[5px] overflow-css">
                    <ul className="list-none flex flex-col gap-3 p-[2rem]">
                        <div>
                            <li className="w-[100%] flex flex-row justify-between gap-4 px-[30px]">
                                <div className="flex flex-row items-center gap-8">
                                    <i className="ri-checkbox-line text-green-800 text-[20px]"></i>
                                    <span className="text-[#16404D] font-bold">Task 1</span>
                                </div>
                                <i className="ri-star-line text-[20px]"></i>
                            </li>
                            <Divider variant="middle" sx={{ "width": "65vw", "marginLeft": "6px", "marginTop": "6px" }} component="li" />
                        </div>
                    </ul>
                </div>
            </div>
        </div>

        {select && <div>
            <Backdrop
                sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1, width: "100vw" })}
                open={select}
            >
                <div className='w-[40vw] h-[500px] mx-auto bg-white rounded-[5px] p-2'>
                    <div className='flex flex-col gap-5 mx-[50px]'>
                        <li className="flex flex-row lg:justify-between md:justify-evenly justify-center gap-2 px-[30px] mt-[10px]">
                            <div className="flex flex-row items-center gap-2">
                                <i className="ri-checkbox-blank-line text-[20px] cursor-pointer"></i>
                                <span className="individualTask cursor-pointer text-[#16404D] font-bold w-[100px] overflow-hidden"
                                >
                                    task.task
                                </span>
                            </div>
                            <i className="ri-star-line text-[20px]"></i>
                        </li>
                        <Divider variant="middle" sx={{ "width": "100%", "marginLeft": "4px", "marginTop": "6px" }} />
                        <div className='flex flex-row gap-8 px-[30px] mt-[10px]'>
                            <i className="ri-add-large-line"></i>
                            <span>Add Step</span>
                        </div>
                        <Divider variant="middle" sx={{ "width": "100%", "marginLeft": "4px", "marginTop": "6px" }} />

                        <div className='flex flex-row gap-8 px-[30px] mt-[10px]'>
                            <i className="ri-notification-fill"></i>
                            <span>Set remaimber</span>
                        </div>
                        <Divider variant="middle" sx={{ "width": "100%", "marginLeft": "4px", "marginTop": "6px" }} />

                        <div className='flex flex-row gap-3 px-[30px]'>
                            <ResponsiveDatePickers />
                            <span>Add Date</span>
                        </div>
                        <Divider variant="middle" sx={{ "width": "100%", "marginLeft": "4px", "marginTop": "6px" }} />
                        <input type="text" name="Add-Note" className=' h-[50px] border-none outline-none' placeholder='Add Note' />
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <button
                            onClick={handleClose}
                            className="cursor-pointer p-2 text-red-600 hover:bg-red-100 rounded-full"
                        >
                            <i className="ri-close-large-fill w-5 h-5"></i>
                        </button>

                        <button
                            // onClick={() => dispatch(deleteTask(task.id))}
                            className="cursor-pointer p-2 text-red-600 hover:bg-red-100 rounded-full"
                        >
                            <Trash2 className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </Backdrop>
        </div>}
    </>
    )
}
