import React from "react";
import { Link } from "react-router-dom";

function ProductCard({item,user}) {
  const productUrl=`/products/product/${item.id}`

  const cardStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const cardBodyStyle = {
    flex: 1,
  };
  const imgStyle = {
    height: "200px", 
    objectFit: "contain", 
  };




  function handleClick(product){
    let localFavs=JSON.parse(localStorage.getItem("favs"))??[]
    let itemIndex=localFavs.findIndex(localItem => product.id===localItem.id)
    if (itemIndex>=0){
      localFavs=localFavs.filter(item=>item.id!==product.id)
    }
    else{
      localFavs.push({id:product.id,title:product.title,image:product.image,description:product.description})
    }
    localStorage.setItem("favs", JSON.stringify(localFavs))
  }

  return ( 
    <div className="col-sm mb-3">
      <div className="card" style={cardStyle}>
        <Link to={productUrl} > <img src={item.image} className="card-img-top" alt={item.title} style={imgStyle} /></Link>
        <div className="card-body" style={cardBodyStyle}>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            {item.description.substring(0,25)}...
          </p>
          <p className="lead">{item.price}</p>
          {user && <a href="#" className="btn btn-primary" onClick={()=>handleClick(item)}>
            Fav
          </a>}
        </div>
      </div>
      </div>
  );
}

export default ProductCard;
