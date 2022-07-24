import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Appcontext } from '../context/Appcontext';

function Private({children}) {
    let navigate=useNavigate()
    const {isauth}=useContext(Appcontext);
    if(isauth.status===false)
    {
        return <Navigate to="/"/>
    }
  return children
}

export default Private