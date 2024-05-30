
"use client";

import { Checkbox, Table } from "flowbite-react";
import { merch } from "../../libary/data/merch";

export default function Component() {
  return (
    <div className="overflow-x-auto">
      <Table className="bg-black">
        <Table.Head className=" text-white">
          <Table.HeadCell className="p-4 bg-indigo-950">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell className="bg-indigo-950">Product name</Table.HeadCell>
          <Table.HeadCell className="bg-indigo-950">Band</Table.HeadCell>
          <Table.HeadCell className="bg-indigo-950">Price</Table.HeadCell>
          <Table.HeadCell className="bg-indigo-950 text-white">
            <span className="sr-only ">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">

          {merch.map((i, key) => {
                return(
                  <Table.Row className="border-gray-700 bg-gray-500 text-white hover:bg-gray-600">
                  <Table.Cell className="p-4">
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium">
                    {i.name}
                  </Table.Cell>
                  <Table.Cell>{i.band}</Table.Cell>
                  <Table.Cell>${i.price}</Table.Cell>
                  <Table.Cell>
                    <a href="/" className="font-medium text-cyan-200 hover:underline dark:text-cyan-500">
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
                )
            })}

 
        </Table.Body>
      </Table>
    </div>
  );
}
