import React from 'react';
import "./BuyCart.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BuyCart = ({ carrito, eliminarProducto, productosData }) => {
  const totalPrecio = carrito.reduce(
    (total, productoCarrito) => total + (productosData.find(producto => producto.id === productoCarrito.producto.id)?.precio || 0) * productoCarrito.cantidad,
    0
  );

  const isCarritoVacio = carrito.length === 0;

  return (
    <div className="buy-cart-container">
      <h2>Carrito de Compras</h2>

      {isCarritoVacio ? (
        <p>El carrito está vacío.</p>
      ) : (
        carrito.map((productoCarrito) => {
          const producto = productosData.find(producto => producto.id === productoCarrito.producto.id);

          return (
            <div key={productoCarrito.producto.id} className="product-card">
              <img
                src={producto?.img || ''}
                alt={producto?.nombre || ''}
                className="product-image"
              />
              <div className="product-details">
                <h3>{producto?.nombre}</h3>
                <p>Cantidad: {productoCarrito.cantidad}</p>
                <p>Precio unitario: ${producto?.precio || 0}</p>
                <button className='button' onClick={() => eliminarProducto(productoCarrito.producto.id)}>
                  Eliminar del carrito
                </button>
              </div>
            </div>
          );
        })
      )}

      <div className="total-container">
        <p>Total: ${totalPrecio}</p>
        <Link to="/Checkout">
          <button className={`button finalizar-btn ${isCarritoVacio ? 'disabled' : ''}`} disabled={isCarritoVacio}>
            Comprar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BuyCart;

