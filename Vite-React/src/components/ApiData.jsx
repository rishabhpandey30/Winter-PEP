import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ApiData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState("")
    useEffect(() =>{
        async function fetchData(){
            setLoading(true);
            try{
            const response = await fetch('https://jsonplaceholder.typicode.com/post')
            const result = await response.json()
            if(!response.ok){
                throw new Error("Error while loading the data")
            }
            setData(result)
            console.log(result)
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false);
            }
        }

        fetchData();
    },[]);

    if(loading){
        return <h1>Loading....</h1>
    }
    if(err){
        return <h2>{err}</h2>
    }
  return (
    <div>
        <h1>Fetch Data</h1>
        <ul>
            {data.slice(0,15).map(el =>{
                return <li key={el.id}>{el.title}</li>
            })}
        </ul>
    </div>
  )
}

export default ApiData