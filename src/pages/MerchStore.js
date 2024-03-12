import Card from "../components/Card/Card";
import { merch } from "../libary/data/merch";


// const handleEvents = (array) => {
//     if(array.length > 0){
//         return array.map(function(each){
//         return(
//             <Card name={each.name} band={each.band} price={each.price} img={each.img}></Card>
//         )
//         })
//     }
// }


const MerchStore = () => {
    console.log(merch)
    return(
        <div className="">
            <p className="m-2 text-3xl">Merch Store</p>
            <div className="grid grid-cols-5">
            {merch.map((i, key) => {
                return(
                    <Card key={key} name={i.name} band={i.band} price={i.price} img={i.img}></Card>
                )
            })}
            </div>
        </div>
    )
  };
  
  export default MerchStore;