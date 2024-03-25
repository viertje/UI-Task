import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const SBBForm = ({array}) => {

    const [startDate, setStartDate] = useState(new Date());
    const [chosenClass, setChosenClass] = useState(0);
    const [subscriptionDuration, setSubscriptionDuration] = useState(0);
    const [chosenCategory, setChosenCategory] = useState(0);
      

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 place-items-center">
                <DatePicker className="text-black rounded-md text-center m-24"selected={startDate} onChange={(date) => setStartDate(date)} />
                <select className="text-black rounded-md text-center" value={chosenClass} onChange={(e) => setChosenClass(e.target.value)}>
                    <option value={0}>First Class</option>
                    <option value={1}>Second Class</option>
                </select>
                <select className="text-black rounded-md text-center" value={subscriptionDuration} onChange={(e) => setSubscriptionDuration(e.target.value)}>
                    <option value={0}>Year Subscription</option>
                    <option value={1}>Month Subscription</option>
                </select>

                <select className="text-black rounded-md text-center" value={chosenCategory} onChange={(e) => setChosenCategory(e.target.value)}>
                    {array.map((item, index) => (
                        <option key={index} value={index}>{item.category}</option>
                    ))}
                </select>
                <div>
                    <div>price</div>
                    <div className='m-4'>{array[chosenCategory].prices[subscriptionDuration][chosenClass]}</div>
                </div>
            </div>
        </div>
    );
}
  
      
export default SBBForm;