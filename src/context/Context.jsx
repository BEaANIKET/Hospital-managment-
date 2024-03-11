import { data } from 'autoprefixer';
import React, { createContext ,useState} from 'react';

export const Context = createContext(null);


const Contextprovider = ({children})=>{

    let [opa, setopa] = useState(".3");
    let [opa2, setopa2] = useState("1");
    let [userImage , setUserImage] = useState(null);

    let contextData = {opa,setopa,opa2,setopa2,userImage,setUserImage};


    return (
        <Context.Provider value={contextData}>
            {children}
        </Context.Provider>
    )
}

export default Contextprovider;