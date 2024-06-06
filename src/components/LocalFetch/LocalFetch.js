import React, { useEffect, useState } from 'react';
import { getProduct, getProducts } from './productFetch';

const LocalFetch = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts("boards").then((response) => setProducts(response));
    }, []);

            return (
                // Your JSX code goes here
                <div className='grid grid-cols-3'>
                    {products.map((product) => (
                        <div className='m-4 border-white rounded-md p-4 border-2' key={product.id}>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            );
        };

export default LocalFetch;