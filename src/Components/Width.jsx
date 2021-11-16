import React, { useEffect, useState } from 'react'
const Width = () => {
    const [widthCount, setWidthCount] = useState(window.innerWidth)
    const [heightCount, setHeightCount] = useState(window.innerHeight)
    useEffect(() => {
        window.addEventListener("resize",()=>{setWidthCount(window.innerWidth)})
        return () => {
            window.removeEventListener("resize",()=>{setWidthCount(window.innerWidth)})
        }
    },[setWidthCount])
    useEffect(() => {
        window.addEventListener("resize",()=>{setHeightCount(window.innerHeight)})
        return () => {
            window.removeEventListener("resize",()=>{setHeightCount(window.innerHeight)})
        }
    },[setHeightCount])
    return (
        <>
            <div className="container">
                <div className="bigBox">
                    <div className="smBox">
                            <h1>Width is : {widthCount}</h1>
                            <h1>height is : {heightCount}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Width
