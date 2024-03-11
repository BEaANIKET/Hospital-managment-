import React, { useContext, useState } from "react";
import star from "../assets/star.png";
import biglogo from "../assets/logobig.png";
import namelogo from "../assets/namelogo.png";
import headlogo from "../assets/headlogo.png";
import {
    BrowserRouter,
    Route,
    Router,
    Routes,
    Navigate,
    Link,
} from "react-router-dom";
import Loginpage from "./Loginpage";
import Signpage from "./Signpage";
import { data } from "autoprefixer";
import { Context } from "../context/Context";
import Camera from "./Camera";

function Login() {
    const [page, setpage] = useState("login");
    let color2 = "rgba(38, 30, 59, 1)";
    
    let {opa,opa2} = useContext(Context);





    let color = "rgba(0, 211, 114, 1)";
    return (
        <>
            <div className=" w-full xl:w-4/5 flex min-h-screen h-full">
                <div className="w-2/3 min-h-screen min-h-full flex flex-col relative justify-center">
                    <img
                        className=" top-0 h-full w-full  absolute"
                        src={star}
                        alt=""
                    />
                    <div className=" flex flex-col items-center justify-center relative z-50">
                        <div className="img flex items-center justify-center w-17 h-21">
                            {" "}
                            <img className="h-full w-full" src={biglogo} alt="" />
                        </div>
                        <div className="flex items-center justify-center w-64 h-12">
                            {" "}
                            <img className="w-full h-full" src={namelogo} alt="" />
                        </div>
                        <p className="text-white text-4xl font-bold mt-10">
                            Feel <span style={{ color: color }}>Safe</span> Everywhere
                        </p>
                        <p className="text-white text-4xl font-medium mt-10">
                            #Safe-<span style={{ color: color }}>T</span>-Fast
                        </p>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center  pl-7">
                    <div className="head w-full h-40 mt-11 flex  item-center relative justify-center mb-7">
                        <img className="absolute left-0 h-full" src={headlogo} alt="" />
                        <p className="flex justify-center items-center font-semibold text-black text-4xl">
                            {" "} 
                            <span style={{ opacity: opa2 }}><Link to={'/'}>Sign Up</Link> </span>
                            { }
                            <span className=" opacity-30"> /</span>{" "}
                            <span className=" cursor-pointer" style={{ opacity: opa }}> <Link to={'/login'}>Login</Link>  </span>
                        </p>
                    </div>
                    <Routes>
                        <Route path=":/" element={<Signpage />}/>
                        <Route path=":/login" element={<Loginpage />}/>
                        <Route path=":/camera" element={<Camera />}/>
                    </Routes>
                    
                </div>
            </div>

        </>
    );
}

export default Login;
