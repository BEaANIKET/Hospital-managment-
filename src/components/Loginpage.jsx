import React, { useState } from 'react';

const Loginpage = () => {
    const [hospitalname, sethospitalname] = useState("");
    const [password, setpassword] = useState("");
    const [code, setcode] = useState("");
    const [email, setemail] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://https://hotal-managment-backend.onrender.com/hospital/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    hospitalName: hospitalname,
                    email: email,
                    password: password,
                    specialAccessCode: code
                }),
            });

            console.log("Response status:", response.status);
            
            const data = await response.json();

            if (response.ok) {
                console.log("Login successful. Redirecting...");
                window.location.href='/camera'
                console.log("Data:", data);
            } else {
                console.log("Login failed. Response data:", data);
                const errorMessage = data.error || "An error occurred while logging in.";
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Error in POST request:', error);
        }
    };

    return (
        <>
            <div className=' flex justify-center items-center w-full flex-col h-4/5'>
                <div className=' rounded-3xl border border-black pt-20 pb-32 pl-10 pr-10 shadow-lg shadow-black'>
                    <div className=' flex justify-center items-center w-full flex-col gap-3'>
                        <p className=' text-4xl font-semibold text-black'>Welcome to Sicu-aura</p>
                        <p className=' text-2xl font-semibold opacity-55 text-black '>Your one stop safety solutions using innovative technology</p>
                    </div>
                    <div className=' flex flex-col gap-10 justify-center items-center mt-10'>
                        <input
                            type="text"
                            name="hospitalname"
                            placeholder="Hospital Name"
                            value={hospitalname}
                            onChange={(e) => sethospitalname(e.target.value)}
                            className="text-black text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email ID"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="text-black text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
                        />
                        <input
                            type="password"
                            name="Password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            className="text-black text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
                        />
                        <input
                            type="digit"
                            name="Special Access Code"
                            placeholder="Special Access Code"
                            value={code}
                            onChange={(e) => setcode(e.target.value)}
                            className="text-black text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
                        />
                    </div>
                </div>
                <button onClick={handleSubmit} className='mt-7 text-white rounded-xl p-3 pl-5 pr-5 text-xl bg-violet-950'>Login</button>
            </div>
        </>
    );
};

export default Loginpage;
