import React, { useState, useEffect } from 'react';
import { Spinner } from 'flowbite-react';
import Card from '../Card/Card';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/');
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Spinner className='w-full flex justify-center mt-48' color="failure" aria-label="Spinner" size="xl" />;
  if (error) return <p>Error: {error}</p>;
  console.log(data);

  const sortedProducts = data.products.map(item => ({
    name: item.title,
    price: item.price,
    description: item.description,
    img: item.images[0],
    band: item.brand,
  }));

  return (
    <div className='w-full flex justify-center'>
      <div className='grid grid-cols-4 gap-4 m-4'>
        {sortedProducts.map((i, key) => {
                  return(
                    <Card item={i} />
                  );
                })}
              </div>
            </div>
          );
};

export default DataFetchingComponent;
