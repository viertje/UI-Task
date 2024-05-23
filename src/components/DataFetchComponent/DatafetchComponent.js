import React, { useState, useEffect } from 'react';
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

  return (
    <div className='w-full flex justify-center'>
        <div className='flex flex-col gap-4 m-4'>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>{data.products.title}</div>
      {data.products.map((i, key) => {
                return(
                    
                    <div key={key} className='flex flex-col gap-4'>
                        <h1 className='text-xl tex-center'>{i.title}</h1>
                        <div>{i.price}</div>
                        <img className='rounded-xl' src={i.images[0]} alt="hi" />
                        <div className='w-72'>{i.description}</div>

                    </div>)
            })}
      </div>
    </div>
  );
};

export default DataFetchingComponent;
