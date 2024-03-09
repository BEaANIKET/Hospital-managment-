
import React from 'react';
import { Link } from 'react-router-dom';


const Loginpage = () => {
    return (
        <>
            <div className=' flex justify-center items-center w-full flex-col h-4/5'>
                <div className =' rounded-3xl border border-black pt-20 pb-32 pl-10 pr-10 shadow-lg shadow-black'>
                    <div className=' flex justify-center items-center w-full flex-col gap-3'>
                        <p className=' text-4xl font-semibold text-black'>Welcome to Sicu-aura</p>
                        <p className=' text-2xl font-semibold opacity-55 text-black '>Your one stop safety solutions using innovative technology</p>
                    </div>

                    <div className=' flex flex-col gap-10 justify-center items-center mt-10'>
                        <input
                            type="text"
                            name="hospitalname"
                            placeholder="Hospital Name"
                            className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
                        />
                        <input
                            type="email"
                            name="Email ID"
                            placeholder="Email ID"
                            className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
                        />
                        <input
                            type="password"
                            name="Password"
                            placeholder="Password"
                            className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
                        />
                        <input
                            type="digit"
                            name="Special Access Code"
                            placeholder="Special Access Code"
                            className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
                        />
                    </div>
                </div>

                <button className=' mt-7 text-white rounded-xl p-3 pl-5 pr-5 text-xl bg-violet-950'><Link  to={'/camera'}>Login</Link></button>
            </div>

        </>
    )
}

export default Loginpage;