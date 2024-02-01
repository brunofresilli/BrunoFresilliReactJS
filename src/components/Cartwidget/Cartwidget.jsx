import React from 'react'
import Cart from '../../assets/cart.png';
import { Link } from 'react-router-dom';

const Cartwidget = () => {
return (
  <div style={{ position: 'relative', display: 'inline-block', marginRight: '30px' }}>
  <Link to="/cart" style={{ marginRight: '30px' }}>
    <img src={Cart} alt="Cart" style={{ height: '55px' }} />
  </Link>
  
 
</div>

);
        }
export default Cartwidget