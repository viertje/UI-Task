import React, { useEffect, useState } from 'react';
import { getProducts } from './productFetch';

const LocalFetch = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
                getProducts("boards").then((response) => setProducts(response));
            });

            return (
                // Your JSX code goes here
                <div>
                    {products.map((product) => (
                        <div key={product.id}>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            );
        };

export default LocalFetch;