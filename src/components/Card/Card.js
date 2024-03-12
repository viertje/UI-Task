import * as React from "react";
import { useState } from 'react';
import { Button, Modal } from 'flowbite-react';


export default function Card({name, band, price, img}) {
    const [openModal, setOpenModal] = useState(false);
    return (
      <>
        <div className="bg-gradient-to-r from-blue-900 to-neutral-800 h-80 w-56 m-2 p-4 rounded-md grid grid-cols-1 place-content-center transition hover:duration-300 ease-in-out">
          <img className="object-cover rounded-md aspect-square h-48" src={img} alt="" />
          <div className="m-2">{name}</div>
          <div className="flex justify-between">
            <div className="m-2">{band}</div>
            <div className="m-2">{price + ".-"}</div>
          </div>
          <div className="flex justify-between">
          <Button onClick={() => setOpenModal(true)}>Info</Button>
          <Button onClick={() => setOpenModal(true)}>Add to basket</Button>
          </div>
        </div>
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <img className="object-cover rounded-md aspect-square h-48" src={img} alt="" />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Very cool shirt
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Add to basket</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }