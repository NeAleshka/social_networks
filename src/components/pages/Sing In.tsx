import React from 'react'
import {useNavigate} from "react-router-dom";


export const SingIn = () => {
   const navigate=useNavigate()
   
    return (
        <div>
            <button onClick={()=>navigate('/')}> SingIn</button>
        </div>
    )
}

