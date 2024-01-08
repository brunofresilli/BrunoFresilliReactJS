import React from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from '../cardProduct/CardProduct';
import "./CategoryPage.css";
import { Link } from 'react-router-dom';

const CategoryPage = ({ productos }) => {
    
  let { marca } = useParams();

  const productosFiltrados = productos.filter(
    (producto) => producto.marca.toLowerCase() === marca.toLowerCase()
  );

  return (
    <div >
      {productosFiltrados.length > 0 ? (
        <div className='CardContainer'>
          {productosFiltrados.map((producto) => (
            <Link to={`/detail/${producto.codigo}`} key={producto.codigo}>
            <CardProduct key={producto.codigo} producto={producto} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos para la marca {marca}</p>
      )}
    </div>
  );
};

export default CategoryPage;
