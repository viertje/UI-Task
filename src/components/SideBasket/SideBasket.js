import { HiOutlineTrash } from 'react-icons/hi';
import { useState } from 'react';
import { Modal } from 'flowbite-react';
import Form from '../Form/From';

export default function SideBasket({ array, removeItem }) {
    const [openModal, setOpenModal] = useState(false);

    const total = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);

    return (
        <>
            <div className="w-full border-2 border-white h-auto grid grid-cols-5 mt-2 rounded-md">
                {array.map((i, key) => {
                    return (
                        <>
                            <div className="border-2 border-white text-center">{key + 1}</div>
                            <div className="col-span-3 border-2 border-white text-center">{i.name}</div>
                            <div className="border-2 border-white text-center">{i.price +".-"}</div>
                        </>
                    );
                })}
                <div className="border-2 border-white">
                    <button className="h-full w-full flex place-items-center justify-center hover:bg-gray-700" onClick={() => removeItem()}>
                        <HiOutlineTrash className="justify-self-center" />
                    </button>
                </div>
                <div className="col-span-3 border-2 border-white text-center">Total</div>
                <div className="border-2 border-white text-center">{total +".-"}</div>
            </div>
            {array.length !== 0 && (
                <div className="flex justify-end">
                    <button className="my-2 bg-blue-700 bg-gradient-to-r from-gray-700 to-indigo-900 hover:to-indigo-950 hover:from-gray-950 rounded-lg border-2 border-white p-2" onClick={() => setOpenModal(true)}>
                        Checkout
                    </button>
                </div>
            )}

            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className="bg-gray-600">Your Basket</Modal.Header>
                <Modal.Body className="bg-gray-700">
                    <div className="space-y-6">
                        <div className="w-full border-2 border-white h-auto grid grid-cols-5 rounded-md">
                            {array.map((i, key) => {
                                return (
                                    <>
                                        <div className="border-2 border-white text-center">{key + 1}</div>
                                        <div className="col-span-3 border-2 border-white text-center">{i.name}</div>
                                        <div className="border-2 border-white text-center">{i.price + ".-"}</div>
                                    </>
                                );
                            })}
                            <div className="border-2 border-white">
                                <button className="h-full w-full flex place-items-center justify-center bg-gray-800 hover:bg-gray-600" onClick={() => removeItem()}>
                                    <HiOutlineTrash className="justify-self-center" />
                                </button>
                            </div>
                            <div className="col-span-3 border-2 border-white text-center bg-gray-800">Total</div>
                            <div className="border-2 border-white text-center bg-gray-800">{total +".-"}</div>
                        </div>
                    </div>
                    <div className='text-lg text-center mt-4'>Your Information</div>
                    <Form array={array} total={total} />
                </Modal.Body>
            </Modal>
        </>
    );
}
