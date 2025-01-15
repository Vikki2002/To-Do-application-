import { useState } from 'react';
import logo from '../../assets/logomark.svg'
import 'remixicon/fonts/remixicon.css'

export default function NavBar() {
    const [change, setChange] = useState(false);
    const handle = () => {
        setChange(!change);
    }
    return (
        <div className="w-full h-[56px] flex items-center justify-between py-[12px] px-[16px]">
            <div className="flex items-center gap-[16px]">
                <i id='menu' className="ri-menu-line pointer"></i>
                <div className="flex items-center gap-[8px]">
                    <img src={logo} alt="logo" />
                    <span className='text-[#3F9142] font-rye text-[24px] font-bold'>DoIt</span>
                </div>
            </div>
            <div className="flex items-center gap-[16px]">
                <i className="ri-search-line pointer"></i>
                <i className="ri-grid-fill pointer"></i>
                <div onClick={handle} className='cursor-pointer'>
                    {change ? <i className="ri-sun-line"></i> : <i className="ri-moon-clear-fill pointer"></i> }
                </div>
            </div>
        </div>
    );
}