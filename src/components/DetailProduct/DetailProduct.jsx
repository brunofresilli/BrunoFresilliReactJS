import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailProduct.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const DetailProduct = ({ productosData ,agregarAlCarrito }) => {
  let { id } = useParams();
  console.log('ID from useParams:', id);

  const productoSeleccionado = productosData.find((producto) => producto.id === id);

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
            <CardContent>
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
            <CardActions>
            <button className="button" size="small" onClick={() => agregarAlCarrito(productoSeleccionado.id)}>
            Agregar al carrito
            </button>

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
