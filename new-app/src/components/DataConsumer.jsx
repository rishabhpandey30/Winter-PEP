import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../context/DataProvider.jsx'

function DataConsumer() {
    const {data , fetchData} = useContext(dataContext)
  return (
    <>
    <button onClick={fetchData}>Fetch Data</button>
    {data.loading && <p>Loading....</p>}
    {data.error && <p>{data.error}</p>}
    {data.value && data.value.slice(0,10).map((val)=>(
        <p key={val.id}>{val.title}</p>
    ))}

    </>
  )
}

export default DataConsumer