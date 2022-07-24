import { createContext, useEffect, useState } from "react";

export let Cartcontext=createContext()
export let Cartcontextprovider=({children})=>{
    const [cartdata,setCartdata]=useState(JSON.parse(localStorage.getItem("cartdata1")) || [])

    let handlecartdata=(el)=>{
        let flag=false
        for(let i=0;i<cartdata.length;i++)
        {
            if(cartdata[i].title===el.title)
            {
                flag=true;
                break;
            }
        }
        if(flag)
        {
            let newdata=cartdata.map((ele)=>ele.title===el.title?{...ele,qty:ele.qty+1}:ele)
            setCartdata(newdata)
        }
        else{
            setCartdata([...cartdata,el])

        }
        
    }

    useEffect(()=>{
        localStorage.removeItem("cartdata1")
        localStorage.setItem("cartdata1",JSON.stringify(cartdata))
    },[cartdata])
    return(
        <Cartcontext.Provider value={{handlecartdata}}>
        {children}
    </Cartcontext.Provider>
    )
  
}