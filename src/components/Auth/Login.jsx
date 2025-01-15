import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import './Auth.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";


export default function Login() {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        const { name, value } = e.target;
        setInputData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const { name, email, password } = inputData;
        try {
            dispatch(login({ name, email, password }));
            setLoading(false);
            navigate('/DoIt/home')
        } catch(err) {
            alert(err.message);
            setLoading(false);
        }
    }
    return (<>
        <NavBar />
        <div className="flex justify-center items-center h-screen w-[100vw]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[80vw]">
                <h1 className="text-center">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5 mt-8 w-[100%]">
                    <input type="text" placeholder="Username" name="name" value={inputData.name} onChange={changeEventHandler} className="lg:w-[50%] w-[80%]"/>
                    <input type="email" placeholder="enter email" name="email" value={inputData.email} onChange={changeEventHandler} className="lg:w-[50%] w-[80%]"/>
                    <input type="password" placeholder="Password" name="password" value={inputData.password} onChange={changeEventHandler} className="lg:w-[50%] w-[80%]"/>
                    <button type="submit" className="font-jersey text-[24px] font-semibold button">
                        {loading ? "Processing..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    </>
    );
}