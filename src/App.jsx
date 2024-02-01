import React, { useEffect, useState } from 'react';
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ProductList from './components/productList/productList';
import CategoryPage from './components/CategoryPage/CategoryPage';
import DetailProduct from './components/detailProduct/DetailProduct';
import BuyCart from './components/BuyCart/BuyCart';
import CardProduct from './components/cardProduct/cardProduct';
import Checkout from './components/Checkout/Checkout';
import { db } from "./FireBase/FireBaseConfig";
import { collection, query, getDocs } from "firebase/firestore";



  const App = () => {
    const [productosData, setProductosData] = useState ([]);
    const [carrito, setCarrito] = useState([]);
    const [contador, setContador] = useState(0);
  

    const resetearContador = () => {
      setContador(0);
    };


    useEffect(() => {
      const getProductos = async () => {
        const q = query(collection(db, "productos"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setProductosData(docs);
      };
    
      getProductos();
    }, []);
    const agregarAlCarrito = (id) => {
      
      const productoEnCarrito = carrito.find((item) => item.producto.id === id);
    
      if (productoEnCarrito) {
        
        setCarrito((prevCarrito) => {
          return prevCarrito.map((item) =>
            item.producto.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
          );
        });
      } else {
        
        const productoEncontrado = productosData.find((producto) => producto.id === id);
        setCarrito((prevCarrito) => [...prevCarrito, { producto: productoEncontrado, cantidad: 1 }]);
      }
    
      
      setContador((prevContador) => prevContador + 1);
      
    };
    
    const eliminarCarrito = (id) => {
      setCarrito((prevCarrito) => {
        const updatedCarrito = prevCarrito.map((item) => {
          if (item.producto.id === id) {
           
            if (item.cantidad > 1) {
              return {
                ...item,
                cantidad: item.cantidad - 1,
              };
            } else {
              
              return null;
            }
          } else {
            return item;
          }
        }).filter(Boolean); 
    
        
        const nuevoContador = updatedCarrito.reduce((total, item) => total + item.cantidad, 0);
    
        setContador(nuevoContador);
    
    
        return updatedCarrito;
      });
    };
    
  return (
    <Router>
      <div>
        <Navbar contador={contador}/>
       
        <Routes>
          <Route path="/productos" element={<ProductList productosData={productosData} agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/detail/:id" element={<DetailProduct productosData={productosData} agregarAlCarrito={agregarAlCarrito}/>} />
          <Route
            path="/Category/:marca"
            element={<CategoryPage productosData={productosData} agregarAlCarrito={agregarAlCarrito} />}
          />
           <Route path="/Cart" element={<BuyCart  productosData={productosData} carrito={carrito} eliminarProducto={eliminarCarrito} contador={contador} />} />
          <Route path="/Checkout" element={<Checkout carrito={carrito} setCarrito={setCarrito} resetearContador={resetearContador}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;