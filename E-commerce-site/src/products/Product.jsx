import React, { useState, useEffect } from 'react'
import { json, useParams } from 'react-router-dom'

function Product() {
  const {productId}=useParams()
  const[product, setProduct]=useState({})


  const imgStyle = {
    height: "400px", 
    objectFit: "contain", 
  };

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
            .catch(err=>console.error(err))
  },[productId])
 
  return (
    <>
    <h1>{product.title}</h1>
    <img src={product.image} alt="" className='img-thumbnail' style={imgStyle}/>
    <p>{product.description}</p>
    
    
    </>
  )
}

export default Product