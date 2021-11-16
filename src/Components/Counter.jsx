import React, { useState } from 'react'
import "./Counter.scss"
import { Button } from '@mui/material';
import { MdOutlineAdd,MdOutlineRemove } from "react-icons/md";


const Counter = () => {
    const [num, setNum] = useState(0)
    return (
        <>
            <div className="container">
                <div className="bigBox">
                    <div className="smBox">
                        <p>{num}</p>
                    </div>
                    <div className="buttonArea">
                        <Button variant="contained" className="button" onClick={()=>{setNum(num+1)}}><MdOutlineAdd/></Button>
                        <Button variant="contained" className="button" onClick={()=>{setNum(num>0?num-1:num)}}><MdOutlineRemove/></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
