import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import ProductDetail from './ProductDetail';

function ProductList() {
    const [product ,setProduct] = useState([]);
    useEffect(()=>{
        async function fetchData(){
        try{
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            console.log(result);
            setProduct(result);
        }
        catch (error){
            console.log("Error while fetching")
        }
        }
        fetchData();
    },[])
  return (
    <>
    <h1>ProductList</h1>
    <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)",gap: "2rem"}}>
        {product.map((products)=>(
            <div className='card' key={products.id}>
            <h3>{products.title}</h3>
            <img src={products.image} width={"100px"} />
            <p>{products.price} </p>
            <Link to={`/productDetail/${products.id}`}>View Product</Link>
            </div>
        ))}
    </div>
    </>
  )
}

export default ProductList