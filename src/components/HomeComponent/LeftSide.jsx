import userImage from "../../assets/user.jpg"
import 'remixicon/fonts/remixicon.css'

export default function LeftSide() {

    const siderIterms = [
        { icon: <i className="ri-task-fill"></i>, name: "All Tasks" },
        { icon: <i className="ri-calendar-todo-line"></i>, name: "Today" },
        { icon: <i className="ri-star-line"></i>, name: "Favourites" },
        { icon: <i className="ri-map-2-line"></i>, name: "Planned" },
        { icon: <i className="ri-account-pin-box-fill"></i>, name: "Assigned to me" },
    ]

    return (
        <div id="left-side" className="flex flex-col items-center w-[300px] h-auto py-3 background-color rounded-lg shadow-lg">
            <div className="flex flex-col items-center gap-4 mt-[1rem]">
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden shadow-lg">
                    <img src={userImage} alt="user_image" className="w-[100%] h-[100%] object-cover" />
                </div>
                <span className="text-[20px] font-medium font-rye">Hey, ABC</span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="mt-[1rem] bg-white w-[250px] h-auto py-4 rounded-lg shadow-lg">
                    <ul className="flex flex-col gap-4 text-[black]">
                        {siderIterms.map((item, index) => (
                            <li key={index} className="flex items-start gap-8 cursor-pointer px-9 text-[18px]">
                                {item.icon}
                                <span className="font-normal">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-row items-center justify-evenly gap-2 px-[5px] w-[200px] h-[60px] bg-white rounded-lg shadow-lg cursor-pointer">
                    <i className="ri-add-large-fill"></i>
                    <span className="text-[18px] font-medium font-rye">Add List</span>
                </div>
                <div className="flex flex-row items-center justify-evenly gap-2 px-[5px] w-[200px] h-[60px] bg-white rounded-lg shadow-lg">
                    <span className="text-[18px] font-medium font-roboto">Today Task</span>
                    <span className="">11</span>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
