import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Loading from './Loading';
import Image from './Image';
import Box from './Box';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Products = () => {
    const {data: products, loading, error} = useFetch('products/');

    const { theme } = useContext(ThemeContext);


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
                    <Link to={'/products/'+product.id} style={{ color: theme.foreground }}>{product.title}</Link>
                </Box>
            </div>
          );
        })}
      </>
    );
};

export default Products;