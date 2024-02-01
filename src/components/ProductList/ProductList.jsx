import React from 'react';
import "./ProductList.css";
import CardProduct from '../cardProduct/cardProduct';

const ProductList = ({ productosData, agregarAlCarrito }) => {
  return (
    <div className='CardContainer'>
      {productosData.map((productosData) => (
        <CardProduct key={productosData.id} productosData={productosData} agregarAlCarrito={agregarAlCarrito} />
      ))}
    </div>
  );
};

export default ProductList;
