import Backdrop from '@mui/material/Backdrop';
import PropTypes from 'prop-types';
import ResponsiveDatePickers from '../DatePicker/DatePicker';
import Divider from '@mui/material/Divider';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function ViewIndividualTask({ open }) {

    var [close, setClose] = useState(false);
    const handleClose = () => {
        if (!close) {
            setClose(false)
        }
    }
    return (
        <div>
            <Backdrop
                sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1, width: "100vw" })}
                open={open}
            >
                <div className='w-[40vw] h-[500px] mx-auto bg-white rounded-[5px] p-2'>
                    <div className='flex flex-col gap-5 mx-[50px]'>
                        <li className="flex flex-row justify-between gap-4 px-[30px] mt-[10px]">
                            <div className="flex flex-row items-center gap-8">
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
        </div>
    );
}

ViewIndividualTask.propTypes = {
    open: PropTypes.bool.isRequired
}
