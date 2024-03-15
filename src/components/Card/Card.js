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
      <div className="bg-gradient-to-r from-blue-900 to-neutral-800 h-72 w-48 m-2 rounded-md grid grid-cols-1 place-content-center transition hover:duration-300 ease-in-out">
        <img className="place-self-center object-cover rounded-t-md aspect-square h-full w-full" src={item.img} alt="" />
        <div className="p-2">
          <div className="">{item.name}</div>
          <div className="flex justify-between">
            <div className="">{item.band}</div>
            <div className="">{item.price + ".-"}</div>
          </div>
          <div className="flex justify-between pt-1">
            <Button size="xm" onClick={() => setOpenModal(true)}>Info</Button>
            <Button size="xm" onClick={handleAddObject}>
              <HiShoppingCart className="h-5 w-5" />
              To basket
            </Button>
          </div>
        </div>

        </div>
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{item.name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img className="object-cover rounded-md aspect-square h-48" src={item.img} alt="" />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Very cool shirt
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddObject}>Add to basket</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }