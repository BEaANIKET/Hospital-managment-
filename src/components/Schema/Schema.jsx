import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    hospitalname: Yup.string().min(2).max(30).required("Please Enter your name"),
    address: Yup.string().min(2).max(30).required("Please Enter your address"),
    city: Yup.string().required("A Email is city"),
    state: Yup.string().required("A Email is state"),
    pincode: Yup.number().required("A Email is pincode"),
    hospitalRdate:  Yup.string().required("A Email is hospital Reg. date"),
    ambulanceNo:Yup.number().required("A Email is ambulanceNo"),
    email: Yup.string().email().required("An email is required"),
    phonenumber: Yup.string()
    .matches(/^[0-9]+$/, "A phone number can only contain digits")
    .min(8, "A phone number must be at least 8 characters")
    .max(10, "A phone number can't be longer than 10 characters")
    .required('A phone number is required'),
    
    HospitalRnumber: Yup.string().required("A Email is HospitalRnumber"),
    wardnumber:Yup.number().required("A Email is required"),
    password: Yup.string().min(6).required("A Email is password"),
    confirm_password: Yup.string().oneOf([Yup.ref('password') , null , "Pasword must match"]).required(),
})