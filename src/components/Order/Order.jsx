import React from 'react'
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';

const Order = ({ orderNumber }) => {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Gracias por elegirnos, su numero de orden es: {orderNumber}
    </Alert>
  );
}

export default Order;
