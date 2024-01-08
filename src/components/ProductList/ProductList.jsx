import React from 'react';
import "./ProductList.css";
import CardProduct from "../cardProduct/CardProduct";
import { Link } from 'react-router-dom';




  
  
  
  const ProductList = ({ productos }) => {
    return (
      <div className='CardContainer'>
        {productos.map((producto) => (
          <Link to={`/detail/${producto.codigo}`} key={producto.codigo}>
            <CardProduct producto={producto} />
          </Link>
        ))}
      </div>
    );
  };
  
  export default ProductList;