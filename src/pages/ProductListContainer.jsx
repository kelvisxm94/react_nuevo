import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';

export default function ProductDetailContainer() {
  const { category } = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('../products.json')
      .then( res => res.json())
      .then( data => {
        let filterProducts = [];
        data.forEach(prod => {
          if(category == undefined || category == 'all') {
            filterProducts.push(prod);
          } else if (category == 'diets' && prod.description == 'Dieta' ) {
            filterProducts.push(prod);
          } else if (category == 'rutins' && prod.description == 'Rutina' ) {
            filterProducts.push(prod);
          } else if (category == 'combos' && prod.description == 'Paquete' ) {
            filterProducts.push(prod);
          } else if (category == 'promos' && prod.description == 'Promoción' ) {
            filterProducts.push(prod);
          }
        });
        setProducts(filterProducts);

      })
      .catch( error => console.error( error ))
  },[category])

  return (
    <>
      <ProductList productos={products} />
    </ >
  );
}
