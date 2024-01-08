import React from 'react';
import "./Itemlistcontainer.css";

const Itemlistcontainer = ({greeting}) => {
  return (
    <div className='Itemlistcontainer'>
        <h3>{greeting}</h3>
    </div>
  )
}

export default Itemlistcontainer