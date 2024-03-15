import { HiOutlineTrash } from 'react-icons/hi';
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';


export default function SideBasket({array, removeItem}){

    
    
      const [openModal, setOpenModal] = useState(false);

    const total = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0);

    return (
        <>  
            <div className="w-full border-2 border-white h-auto grid grid-cols-5 mt-2 rounded-md">
                    {array.map((i, key) => {
                        return(
                            <><div className="border-2 border-white text-center">
                                {key + 1}
                            </div>
                            <div className="col-span-3 border-2 border-white text-center">
                                    {i.name}
                                </div><div className="border-2 border-white text-center">
                                    {i.price}
                                </div></>
                        )
                        })}
                            <div className="border-2 border-white">
                            <button className="h-full w-full flex place-items-center justify-center" onClick={() => removeItem()}>
                                <HiOutlineTrash className='justify-self-center' />
                                </button>
                            </div>
                            <div className="col-span-3 border-2 border-white text-center">
                                Total
                                </div>
                                <div className="border-2 border-white text-center">{total}
                                </div>
            </div>
            {array.lenght !== 0 && (
                <div className='flex justify-end'>
                    <button className='my-2 bg-blue-600 rounded-md border-2 border-white p-2'onClick={() => setOpenModal(true)}>checkout</button>
                </div>
            )}
            
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className='bg-gray-600'>hi</Modal.Header>
                <Modal.Body className='bg-gray-700'>
                <div className="space-y-6">
                <div className="w-full border-2 border-white h-auto grid grid-cols-5 rounded-md">
                    {array.map((i, key) => {
                        return(
                            <><div className="border-2 border-white text-center">
                                {key + 1}
                            </div>
                            <div className="col-span-3 border-2 border-white text-center">
                                    {i.name}
                                </div><div className="border-2 border-white text-center">
                                    {i.price}
                                </div></>
                        )
                        })}
                            <div className="border-2 border-white">
                            <button className="h-full w-full flex place-items-center justify-center" onClick={() => removeItem()}>
                                <HiOutlineTrash className='justify-self-center' />
                                </button>
                            </div>
                            <div className="col-span-3 border-2 border-white text-center">
                                Total
                                </div>
                                <div className="border-2 border-white text-center">{total}
                                </div>
            </div>
                </div>
                <form>
                    
                </form>
                </Modal.Body>
                <Modal.Footer className='bg-gray-800'>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Back
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </>
    )
}



