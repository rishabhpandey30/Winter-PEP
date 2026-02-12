import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

//1. Creating context
export const dataContext = createContext();

function DataProvider({children}) {
    const [data, setData] = useState({
        loading : false,
        error : null,
        value : null
    });

    async function fetchData(){
        setData({...data, loading:true, error: null, value: null})
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const result = await response.json();
            setData({...data, loading : false ,error: null, value: result})
        }
        catch (error){
            setData({...data, loading: false, error: error.message,value : null})
        }
    }

    //2. Providing context
  return (
    <>
   <dataContext.Provider value={{data, fetchData}}>
        {children}
   </dataContext.Provider>
    </>
  )
}

export default DataProvider