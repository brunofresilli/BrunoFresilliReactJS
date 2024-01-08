// DetailProduct.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailProduct.css'; 

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DetailProduct = ({ productos }) => {
  let { codigo } = useParams();

  const productoSeleccionado = productos.find((producto) => producto.codigo === codigo);

  return (
    <div className="detail-product-container">
      {productoSeleccionado ? (
        <Card className="custom-card">
          <CardMedia
            className="card-media" 
            component="img"
            alt={productoSeleccionado.nombre}
            height="150"
            image={productoSeleccionado.img}
          />
          <div className="card-content">
          <CardContent > {/* Agrega la clase de estilo a la CardContent */}
            <Typography gutterBottom variant="h5" component="div">
              {productoSeleccionado.nombre}
            </Typography>
            <Typography variant="h5" color="text.primary">
              ${productoSeleccionado.precio}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {productoSeleccionado.descripcion}
            </Typography>
          </CardContent>
          <CardActions> {/* Agrega la clase de estilo a la CardActions */}
            <Button size="big">Comprar</Button>
            <Button size="big">Agregar al carrito</Button>
          </CardActions>
          </div>
        </Card>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default DetailProduct;
