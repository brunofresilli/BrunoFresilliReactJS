import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';
import ProductList from './components/ProductList/ProductList';
import CategoryPage from './components/CategoryPage/CategoryPage';
import DetailProduct from './components/DetailProduct/DetailProduct';


const App = () => {

  const productos = [
    {
      "codigo": "nj4",
      "marca" : "nike",
      "nombre": "nike jordan 4 retro",
      "img": "src/assets/jordan4.jpg",
      "precio": 11256,
      "descripcion": "Las legendarias Nike Jordan 4 Retro, inspiradas en el legado del baloncesto y diseñadas para destacar en estilo y rendimiento."
    },
    {
      "codigo": "nd1",
      "marca" : "nike",
      "nombre": "nike dunk low",
      "img": "src/assets/dunklow.jpg",
      "precio": 7740,
      "descripcion": "Las clásicas Nike Dunk Low, con su diseño retro y versatilidad, son la elección perfecta para un look casual y cómodo."
    },
    {
      "codigo": "nair1",
      "marca" : "nike",
      "nombre": "nike air force",
      "img": "src/assets/airforce1.jpg",
      "precio": 6250,
      "descripcion": "Las atemporales Nike Air Force 1, conocidas por su estilo distintivo y comodidad, son un ícono en la moda urbana."
    },
    {
      "codigo": "nj1",
      "marca" : "nike",
      "nombre": "nike air jordan",
      "img": "src/assets/airjordanhigh.jpg",
      "precio": 7540,
      "descripcion": "Las impactantes Nike Air Jordan, una expresión de elegancia y potencia inspirada en la grandeza del baloncesto."
    },
    {
      "codigo": "nd2",
      "marca" : "nike",
      "nombre": "nike dunk high",
      "img": "src/assets/dunkhigh.jpg",
      "precio": 8020,
      "descripcion": "Las impresionantes Nike Dunk High, con su diseño moderno y detalles llamativos, son ideales para destacar en cualquier ocasión."
    },
    {
      "codigo": "nair2",
      "marca" : "nike",
      "nombre": "nike air force high",
      "img": "src/assets/airforcehigh.jpg",
      "precio": 7020,
      "descripcion": "Las imponentes Nike Air Force High, una versión elevada del clásico, ofrecen un estilo audaz y una sensación inigualable."
    },
    {
      "codigo": "campb",
      "marca" : "adidas",
      "nombre": "adidas campus black",
      "img": "src/assets/campusblack.jpg",
      "precio": 6650,
      "descripcion": "Las elegantes zapatillas Adidas Campus Black, con su diseño minimalista y versátil, son una elección perfecta para un estilo urbano moderno."
    },
    {
      "codigo": "camp",
      "marca" : "adidas",
      "nombre": "adidas campus 00",
      "img": "src/assets/campus.jpg",
      "precio": 6650,
      "descripcion": "Las clásicas zapatillas Adidas Campus 00, con su diseño retro y auténtico, evocan la esencia del estilo urbano de los años 80."
    },
    {
      "codigo": "forh",
      "marca" : "adidas",
      "nombre": "adidas forum high",
      "img": "src/assets/forumhigh.jpg",
      "precio": 7150,
      "descripcion": "Las distintivas zapatillas Adidas Forum High, con su silueta audaz y detalles llamativos, son una expresión de estilo auténtico."
    },
    {
      "codigo": "amax",
      "marca" : "nike",
      "nombre": "nike air max 97",
      "img": "src/assets/airmax97.webp",
      "precio": 10250,
      "descripcion": "Las icónicas Nike Air Max 97, conocidas por su diseño futurista y amortiguación excepcional, son un símbolo de innovación en calzado deportivo."
    },
    {
      "codigo": "auth",
      "marca" : "vans",
      "nombre": "vans authentic black",
      "img": "src/assets/auth.webp",
      "precio": 3500,
      "descripcion": "Las clásicas Vans Authentic Black, con su estética sencilla y versátil, son ideales para un look casual y relajado."
    },
    {
      "codigo": "nj3",
      "marca" : "nike",
      "nombre": "nike jordan 3 red",
      "img": "src/assets/jordan3.webp",
      "precio": 11220,
      "descripcion": "Las impresionantes Nike Jordan 3 Red, con su diseño dinámico y colores vibrantes, capturan la esencia del estilo de vida urbano moderno."
    },
    {
      "codigo": "nup",
      "marca" : "nike",
      "nombre": "nike uptempo",
      "img": "src/assets/uptempo.webp",
      "precio": 13350,
      "descripcion": "Las llamativas Nike Uptempo, con su diseño audaz y detalles impactantes, son la elección perfecta para aquellos que buscan destacar."
    },
    {
      "codigo": "vknu",
      "marca" : "vans",
      "nombre": "vans knu navy",
      "img": "src/assets/knunavy.webp",
      "precio": 8200,
      "descripcion": "Las modernas Vans Knu Navy, con su estilo contemporáneo y comodidad inigualable, son ideales para aquellos que buscan un look fresco y casual."
    },
    {
      "codigo": "vknuw",
      "marca" : "vans",
      "nombre": "vans knu white",
      "img": "src/assets/knuwhite.webp",
      "precio": 8200,
      "descripcion": "Las elegantes Vans Knu White, con su diseño limpio y minimalista, son una elección atemporal para cualquier ocasión."
    }
  ];  
  return (
    <Router>
  <div>
    <Navbar />
    <Itemlistcontainer greeting="Bienvenidos a SNEARKERS SHOP!!!"/>
    <Routes>
      <Route path="/productos" element={<ProductList productos={productos} />} />
      <Route path="/detail/:codigo" element={<DetailProduct productos={productos} />} />
      <Route path="/Category/:marca" element={<CategoryPage productos={productos} />} />
    </Routes>
  </div>
</Router>

  );
};

export default App;