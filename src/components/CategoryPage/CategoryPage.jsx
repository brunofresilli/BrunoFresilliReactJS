import React from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from '../cardProduct/cardProduct';
import "./CategoryPage.css";
import { Link } from 'react-router-dom';

const CategoryPage = ({ productosData, agregarAlCarrito }) => {
  let { marca } = useParams();

  const productosFiltrados = productosData.filter(
    (producto) => producto.marca.toLowerCase() === marca.toLowerCase()
  );

  return (
    <div>
      {productosFiltrados.length > 0 ? (
        <div className='CardContainer'>
          {productosFiltrados.map((producto) => (
            <CardProduct key={producto.id} productosData={producto} agregarAlCarrito={agregarAlCarrito} />
          ))}
        </div>
      ) : (
        <p>No se encontraron productos para la marca {marca}</p>
      )}
    </div>
  );
}

export default CategoryPage;
