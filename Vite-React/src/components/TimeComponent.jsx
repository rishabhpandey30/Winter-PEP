import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const TimeComponent = () => {
    const [seconds ,setSeconds] = useState(0);

    useEffect(()=>{ 
        console.log("timer Started")
        let timer= setInterval(()=>{
            setSeconds(prev=>prev+1);
        },1000)

        return()=>{
            clearInterval(timer)
        }
    },[])
  return (
    <h1>Time : {seconds}s</h1>
  )
}

export default TimeComponent