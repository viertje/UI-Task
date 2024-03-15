import Card from "../components/Card/Card";
import { merch } from "../libary/data/merch";
import SideBasket from "../components/SideBasket/SideBasket";
import { useState } from "react";

const MerchStore = () => {
    const [list, setList] = useState([]);

    const addObjectToList = (newObject) => {
      setList([...list, newObject]);
    };
    const removeItem = (keyToRemove) => {
        const updatedArray = list.filter(item => item.key !== keyToRemove);
        setList(updatedArray);
      };

    return(
        <div className="grid grid-cols-7">
            <p className="m-2 text-3xl col-span-5">Merch Store</p>
            <p className="m-2 text-3xl col-span-2 text-center">Basket</p>
            <div className="grid grid-cols-4 col-span-5 gap-2">
            {merch.map((i, key) => {
                return(
                    <Card key={key} item={i} addObjectToList={addObjectToList}></Card>
                )
            })}
            </div>
            <div className="col-span-2">
                <SideBasket array={list} removeItem={removeItem}/>
            </div>
            
        </div>
    )
  };
  
  export default MerchStore;