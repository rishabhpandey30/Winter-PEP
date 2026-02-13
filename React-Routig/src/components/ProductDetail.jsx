import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const {id} =useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        async function fetchData(){
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const result = await response.json();
            console.log(result);
            setProduct(result);
        }
        catch (error){
            console.log("Error while fetching")
        }
        }
        fetchData();
    },[id])

    if(!product){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h1>Product Details:</h1>
        <div className="card">
            <h2>{product.title}</h2>
             <img src={product.image} width={"100px"} />
            <p>{product.description}</p>
            <h3>{product.price} </h3>
        </div>
    </div>
  )
}

export default ProductDetail