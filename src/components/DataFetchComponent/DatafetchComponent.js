import React, { useState, useEffect } from 'react';
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

  if (loading) return <p>Loading...</p>;
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
                    <Card item={i}>
                      {/* <div key={key} className='flex flex-col gap-4'>
                          <h1 className='text-xl tex-center'>{i.title}</h1>
                          <div>{i.price}</div>
                          <img className='rounded-xl' src={i.images[0]} alt="hi" />
                          <div className='w-72'>{i.description}</div>
                      </div> */}
                    </Card>
                  );
                })}
              </div>
            </div>
          );
};

export default DataFetchingComponent;
