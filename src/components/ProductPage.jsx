import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Loading from './LoadingData';
import Image from './Image';
import Box from './Box';
import Text from './Text';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { productId } = useParams();
    const {data: products, loading, error} = useFetch('products/'+productId);
    const navigate = useNavigate();
    if (error){
        return <p>An error occurred: {error}</p>
    }
    
    if(loading){
        return <Loading />;
    }

    const handleClick = () => {
        navigate('/products')
      };

    return(
        <div>
            <Box size="large">
                <Image size="l" source={products.image}/>
                <h1>{products.title}</h1>
                <Text size="large"><b>${products.price}</b></Text>
                <Text size="small"><i>{products.category}</i></Text>
                <Text size="medium">Rating: <b>{products.rating.rate}</b> ({products.rating.count})</Text>
                <Text size="medium">{products.description}</Text>
                <br/>
                <Button onClick={handleClick}>Go Back</Button>
            </Box>

        </div>

    );

}

export default ProductPage;