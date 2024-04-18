import React, { useState } from 'react';

const ListPage = () => {
    const [list1, setList1] = useState(["Ferrari", "Lamborghini", "Porsche", "Audi", "BMW", "Mercedes", "Volkswagen", "Ford", "Chevrolet", "Toyota"]);
    const [list2, setList2] = useState(["Tesla", "Nissan", "Mazda", "Honda", "Subaru", "Mitsubishi", "Kia", "Hyundai", "Volvo", "Peugeot"]);

    const handleMoveToSecondList = (item) => {
        setList1(list1.filter((i) => i !== item));
        setList2([...list2, item]);
    };

    const handleMoveToFirstList = (item) => {
        setList2(list2.filter((i) => i !== item));
        setList1([...list1, item]);
    };

    return (
        <div className='flex justify-evenly'>
            <div>
                <p className='text-2xl text-center'>List 1</p>
                <div className='grid grid-col-1 place-self-center'>
                    {list1.map((item) => (
                        <button className='text-center m-1 border-black border-2 rounded-md p-4 bg-gray-700 hover:bg-slate-400' key={item} onClick={() => handleMoveToSecondList(item)}>
                            {item}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <p className='text-2xl text-center'>List 2</p>
                <div className='grid grid-col-1 place-self-center'>
                    {list2.map((item) => (
                        <button className='flex flex-col text-center m-1 border-black border-2 rounded-md p-4 bg-gray-700 hover:bg-slate-400' key={item} onClick={() => handleMoveToFirstList(item)}>
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListPage;