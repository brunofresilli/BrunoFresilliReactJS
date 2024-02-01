import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CardProduct.css";
import { Link } from 'react-router-dom';

const CardProduct = ({ productosData, agregarAlCarrito, sx }) => {
  return (
    <Card className="card-product" sx={{ maxWidth: 250, ...sx }}>
      <Link to={`/detail/${productosData.id}`} key={productosData.id}>
        <CardMedia
          component="img"
          alt={productosData.nombre}
          height="150"
          image={productosData.img}
        />
        <CardContent className="card-product-content">
          <Typography gutterBottom variant="h5" component="div">
            {productosData.nombre}
          </Typography>
          <Typography variant="h5" color="text.primary">
            ${productosData.precio}
          </Typography>
        </CardContent>
      </Link>
      <CardActions className="card-product-actions">
        <button className="button" size="small" onClick={() => agregarAlCarrito(productosData.id)}>
          Agregar al carrito
        </button>
      </CardActions>
    </Card>
  );
};

export default CardProduct;