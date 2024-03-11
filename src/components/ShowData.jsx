import React, { useEffect, useState } from 'react';
import logobig from '../assets/logobig.png'
import namelogo from '../assets/namelogo.png'
import profile from '../assets/profile.png'
import manimg from '../assets/manimg.png'
import search from '../assets/search.png'
import icon from '../assets/icon.png'
import './style.css'


const HospitalList = () => {
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        const fetchHospitals = async () => {
            try {
                const response = await fetch('http://localhost:3001/getHospitals/');
                const data = await response.json();
                setHospitals(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchHospitals();
    }, []); 

    let color = '#201A31';

    return (
        <div>

            <div style={{ backgroundColor: color }} className=' w-full h-28 flex  pl-7 pr-7 justify-between items-center '>
                <div className=' h-full flex justify-center items-center'>
                    <div className=' h-full'><img className=' h-full w-full' src={logobig} alt="" /></div>
                    <div className=' w-60'><img src={namelogo} alt="" /></div>
                </div>
                <div className=' flex justify-center items-center gap-4 text-white '>
                    <div className=' h-full overflow-hidden rounded-full'><img className=' h-full w-full' src={profile} alt="" /></div>
                    <p className=' text-2xl'>Aniket chaturvedi</p>
                    <button className=' bg-gray-800 p-4 text-xl text-center rounded-3xl'> Log out</button>
                </div>
            </div>

            <div className=' w-full h-36'> <img className=' float-right pr-24 h-full ' src={manimg} alt="" /></div>
            <div>
                <div className=' w-10/12 ml-auto  mr-auto flex justify-between items-center mt-6'>
                    <h1 className=' heading text-3xl text-black'>Hospital Registrations</h1>
                    <div className=' flex  justify-center gap-3 items-center'>
                        <div className=' searchbox relative flex  gap-4'>
                            <input className=' pl-3 pr-3 rounded-md w-full text-xl text-black border-black shadow-md shadow-black h-12 flex items-center' type="text"
                                placeholder='Search'
                            />
                            <img className=' absolute right-0 top-2' src={search} alt="" />
                        </div>
                        <div><img src={icon} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className=' w-10/12 h-fit ml-auto mr-auto mt-3 flex flex-col'>
                <div className=" table grid w-full p-5 rounded-3xl items-center justify-between  bg-emerald-400 text-2xl">
                    <p className='p'>No.</p>
                    <p className='p'>Date & Time</p>
                    <p className='p'>Hospital Name</p>
                    <p className='p'>Email</p>
                    <p className='p'>Adress</p>
                    <p className='p'>Phone No.</p>
                    <p className='p'>City</p>
                    <p className='p'>State</p>
                    <p className='p'>Pincode</p>
                </div>
                { console.log(hospitals)}

                {
                  <div className='w-full'>
                  <div className=' text-black flex flex-col text-xl font-bold'>
                    {hospitals.map((hospital, index) => (
                      <ul key={index} className=' table grid w-full'>
                        <li className='li'>{index + 1}</li>
                        <li className='li'>{hospital.registrationDate}</li>
                        <li className='li'>{hospital.hospitalName}</li>
                        <li className='li'>{hospital.email}</li>
                        <li className='li'>{hospital.address}</li>
                        <li className='li'>{hospital.phoneNumber}</li>
                        <li className='li'>{hospital.city}</li>
                        <li className='li'>{hospital.state}</li>
                        <li className='li'>{hospital.pincode}</li>
                      </ul>
                    ))}
                  </div>
                </div>
                }
            </div>
        </div>
    );
};

export default HospitalList;
