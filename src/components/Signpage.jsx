import React, { useContext} from "react";
import { useState, Navigate } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./Schema";
import { Route, Routes } from "react-router-dom";
import { Context } from "../context/Context";


const initialValues = {
  hospitalname: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  hospitalRdate: "",
  ambulanceNo: "",
  email: "",
  phonenumber: "",
  HospitalRnumber: "",
  wardnumber: "",
  password: "",
  confirm_password: "",
}


const Signpage = () => {



  const [selectedFile, setSelectedFile] = useState(null);
  let color2 = "rgba(38, 30, 59, 1)";

  let color = 'rgba(38, 30, 59, 1)'


  const { setopa, setopa2 } = useContext(Context)

  let { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({

    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async(value, action) => {

      const [formData, setFormData] = useState({
        hospitalName: value.hospitalname,
        email: value.email,
        password: value.password,
        address: value.address,
        city: value.city,
        state: value.state,
        pincode: value.pincode,
        phoneNumber: value.phonenumber,
        registrationNumber: value.HospitalRnumber,
        emergencyWardNumber: value.wardnumber,
        registrationCertificate: 'aaa',
        numberOfAmbulancesAvailable: value.ambulanceNo,
        registrationDate: value.hospitalRdate
      })

      try {
        const response = await fetch('http://localhost:3001/hospital/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("data are here ");
        console.log(data); // Log the response from the server
      } catch (error) {
        console.error('Error:', error);
      }

      console.log(value);
      action.resetForm();
      alert("registration completed ")
      window.location.href = '/Login';

    }

  })

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <div className=" w-full ml-auto flex flex-col mr-auto mt-8 gap-20 justify-center">
        <div className=" flex w-full h-full gap-20 justify-between ">
          <div className="left flex flex-col gap-7 w-1/2">
            <input
              type="text"
              name="hospitalname"
              placeholder="Hospital Name"
              value={values.hospitalname}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.hospitalname && touched.hospitalname ? <p className=" text-red-600">*{errors.hospitalname}</p> : null}
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.address && touched.address ? <p className=" text-red-600">*{errors.address}</p> : null}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.city && touched.city ? <p className=" text-red-600">*{errors.city}</p> : null}
            <input
              type="text"
              name="state"
              placeholder="State"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.state && touched.state ? <p className=" text-red-600">*{errors.state}</p> : null}
            <input
              type="number"
              name="pincode"
              placeholder="Pincode"
              value={values.pincode}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.pincode && touched.pincode ? <p className=" text-red-600">*{errors.pincode}</p> : null}
            <input
              type="text"
              name="hospitalRdate"
              placeholder="Hospital Registration Date"
              value={values.hospitalRdate}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.hospitalRdate && touched.hospitalRdate ? <p className=" text-red-600">*{errors.hospitalRdate}</p> : null}
            <input
              type="digit"
              name="ambulanceNo"
              placeholder="Number Of Ambulance available"
              value={values.ambulanceNo}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.ambulanceNo && touched.ambulanceNo ? <p className=" text-red-600">*{errors.ambulanceNo}</p> : null}
          </div>
          <div className="right flex flex-col w-1/2 gap-7">
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.email && touched.email ? <p className=" text-red-600">*{errors.email}</p> : null}
            <input
              type="number"
              name="phonenumber"
              placeholder="Phone Number"
              value={values.phonenumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.phonenumber && touched.phonenumber ? <p className=" text-red-600">*{errors.phonenumber}</p> : null}
            <input
              type="text"
              name="HospitalRnumber"
              placeholder="Hospital Registration Number"
              value={values.HospitalRnumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.HospitalRnumber && touched.HospitalRnumber ? <p className=" text-red-600">*{errors.HospitalRnumber}</p> : null}
            <input
              type="text"
              name="wardnumber"
              placeholder="Emergency-Ward Number"
              value={values.wardnumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.wardnumber && touched.wardnumber ? <p className=" text-red-600">*{errors.wardnumber}</p> : null}

            <div className="div flex flex-col justify-start gap-2 ">
              <p className="text-xl text-black border-b border-black"> <span className=" opacity-35">Registration certificate Upload</span></p>
              <input type="file"
                id="fileInput"
                style={{ display: 'none' }}
              />
              <button
                className=" w-fit border-b border-t border-l border-r p-2 rounded-xl"
                style={{ background: color, color: 'white' }}
                onClick={() => document.getElementById("fileInput").click()}
              >
                Choose File
              </button>
            </div>

            <input
              type="text"
              name="password"
              placeholder="Create Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.password && touched.password ? <p className=" text-red-600">*{errors.password}</p> : null}
            <input
              type="text"
              name="confirm_password"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="text-black  text-xl border-b border-black w-full p-2 pl-0 pr-0 overflow-scroll"
            />
            {errors.confirm_password && touched.confirm_password ? <p className=" text-red-600">*{errors.confirm_password}</p> : null}
          </div>

        </div>

        <div className="w-full flex justify-center items-center m-8">
          <button
            onClick={() => {
              handleSubmit();
            }}
            className=" pl-3 pr-3 pt-1 pb-1 text-xl rounded-xl text-white h-fit w-fit"
            style={{ backgroundColor: color2 }}
          >
            Sign Up
          </button>
        </div>

      </div>



    </>
  );
};

export default Signpage;