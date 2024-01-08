import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CardProduct.css";

const CardProduct = ({ producto, sx }) => {
    return (
      <Card sx={{ maxWidth: 250, ...sx }}>
        <CardMedia
          component="img"
          alt={producto.nombre}
          height="150"
          image={producto.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.nombre}
          </Typography>
          <Typography variant="h5" color="text.primary">
            ${producto.precio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Comprar</Button>
          <Button size="small">Agregar al carrito</Button>
        </CardActions>
      </Card>
    );
  };
  export default CardProduct;