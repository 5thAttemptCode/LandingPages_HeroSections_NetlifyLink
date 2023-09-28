import React from 'react'
import { Link } from 'react-router-dom';
import ProductPage from './ProductPage';

export default function ProductLink({smoothy}) {

  return (
    <Link to={`/productpage/${smoothy.id}`} state={{smoothy}} element={<ProductPage />}>
      <div className='product'>
        <img src={smoothy.image} alt="" />
      </div>
    </Link>
  )
}

