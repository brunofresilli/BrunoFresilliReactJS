import React, { useState } from 'react';
import './Checkout.css'; 
import { collection, addDoc} from "firebase/firestore";
import {db} from "../../FireBase/FireBaseConfig";
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';
import Order from '../Order/Order';

const Checkout = ({ carrito, setCarrito, resetearContador }) => {
    const initialState = {
      nombre: '',
      telefono: '',
      email: '',
    };
    const [orderNumber, setOrderNumber] = useState(null);
    const [values, setValues] = useState(initialState);
  
    const onChange = (e) => {
      const { value, name } = e.target;
      setValues({ ...values, [name]: value });
    };
  
    const totalPrecio = carrito.reduce(
      (total, producto) => total + producto.producto.precio * producto.cantidad,
      0
    );
  
    const onSubmit = async (e) => {
      e.preventDefault();
      const orderDetails = {
        values,
        carrito, // Agrega la información del carrito a los detalles de la orden
        totalPrecio, // También puedes incluir el totalPrecio si lo necesitas en el futuro
      };
      
      
      const docRef = await addDoc(collection(db, 'orders'), orderDetails);
      setOrderNumber(docRef.id);
        
  
        
        setCarrito([]);
        
        resetearContador();
       
        setValues(initialState);
        
        
    
     
    };
  
    return (
      <form onSubmit={onSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={values.nombre}
        onChange={onChange}
        required
      />

      <label htmlFor="telefono">Teléfono:</label>
      <input
        type="tel"
        id="telefono"
        name="telefono"
        value={values.telefono}
        onChange={onChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={onChange}
        required
      />

      <h2>Productos en el Carrito:</h2>
      <ul>
        {carrito.map((productoData) => (
          <li key={productoData.producto.id} className="producto-item">
            <img
              src={productoData.producto.img}
              alt={productoData.producto.nombre}
              className="producto-img"
            />
            <div className="producto-info">
              <span>{productoData.producto.nombre}</span>
              <div>
                - Cantidad: {productoData.cantidad} - Precio: {productoData.producto.precio}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="button-container">
        Precio Total: ${totalPrecio}
      </div>

      <button className="button" type="submit">
        Finalizar Compra
      
      </button>
      
      {orderNumber ? <Order orderNumber={orderNumber} /> : null}
      
    </form>
  );
};

export default Checkout;