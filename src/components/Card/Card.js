import * as React from "react";
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { HiShoppingCart } from 'react-icons/hi';

export default function Card({item, addObjectToList}) {
  const handleAddObject = () => {
    addObjectToList(item);
  };


  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="hover:scale-105 bg-gradient-to-r from-blue-900 to-neutral-800 h-72 w-48 m-2 rounded-md grid grid-cols-1 place-content-center transition hover:duration-300 ease-in-out">
        <img className="place-self-center object-cover rounded-t-md aspect-square h-full w-full" src={item.img} alt="" />
        <div className="p-2">
          <div className="">{item.name}</div>
          <div className="flex justify-between">
            <div className="">{item.band}</div>
            <div className="">{item.price + ".-"}</div>
          </div>
          <div className="flex justify-between pt-1">
            <Button size="xm" className="bg-gradient-to-r from-gray-700 to-indigo-900 hover:to-indigo-950 hover:from-gray-950 px-2" onClick={() => setOpenModal(true)}>Info</Button>
            <Button size="xm" className="bg-gradient-to-r from-gray-700 to-indigo-900 hover:to-indigo-950 hover:from-gray-950"onClick={handleAddObject}>
              <HiShoppingCart className="h-5 w-5 mx-1" />
              To basket
            </Button>
          </div>
        </div>

        </div>
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="bg-gray-600">{item.name}</Modal.Header>
        <Modal.Body className="bg-gray-700">
          <div className="space-y-6 flex flex-col justify-center">
            <img className="object-contain rounded-md aspect-square h-48" src={item.img} alt="" />
            <p className="text-center leading-relaxed text-white dark:text-gray-400"> All sizes available.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-between bg-gray-800">
        <Button className="bg-gradient-to-r from-gray-700 to-indigo-900 hover:to-indigo-950 hover:from-gray-950" onClick={() => setOpenModal(false)}>
            Back
          </Button>
          <Button onClick={handleAddObject} className="bg-gradient-to-r from-gray-700 to-indigo-900 hover:to-indigo-950 hover:from-gray-950">
            <HiShoppingCart className="h-5 w-5 mx-1" />
            Add to basket</Button>

        </Modal.Footer>
      </Modal>
      </>
    );
  }