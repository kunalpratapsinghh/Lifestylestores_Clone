import { createContext, useState } from "react";
import Loginsignup from "../component/Loginsignup";


export let Appcontext = createContext()
export let shirt=[{}]
export let AppcontextProvider=({children})=>{
    const [isauth,setIsauth]=useState({status:false,token:null});
    const [data,setData]=useState("womenshirt")
   const handleauth=(token)=>{
    setIsauth({...isauth,status:true,token:token})
   }
   const handlelogout=()=>{
    setIsauth({...isauth,status:false,token:null})
   }
   const handledata=(data)=>{
    setData(data)
   }
    return(
        <Appcontext.Provider value={{isauth,handleauth,handlelogout,data,handledata}} >
            {children}
        </Appcontext.Provider>
    )
}