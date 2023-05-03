import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Loading from './LoadingData';
import Image from './Image';
import Box from './Box';
import { Link } from 'react-router-dom';

const Products = () => {
    const {data: products, loading, error} = useFetch('products/');


    if (error){
      return <p>An error occurred: {error}</p>
    }
  
    if(loading){
      return <Loading />;
    }
  
    return(
      <>
      {products.length &&
        products.map((product) => {
          return (
            <div key={product.id} >
                <Box size="medium">
                    <Image size="small" source={product.image}/> 
                    <Link to={'/products/'+product.id}>{product.title}</Link>
                </Box>
            </div>
          );
        })}
      </>
    );
};

export default Products;