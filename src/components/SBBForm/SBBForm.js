import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from 'flowbite-react';

const SBBForm = ({ array }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [chosenClass, setChosenClass] = useState(0);
    const [subscriptionDuration, setSubscriptionDuration] = useState(0);
    const [chosenCategory, setChosenCategory] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const classType = chosenClass === 0 ? 'First Class' : 'Second Class';
        const subscriptionType = subscriptionDuration === 0 ? 'Year Subscription' : 'Month Subscription';
        const price = array[chosenCategory].prices[subscriptionDuration][chosenClass];

        const formattedStartDate = startDate.toISOString().split('T')[0];
        alert(`Thank you for your order:
                Start date: ${formattedStartDate}
                Category: ${array[chosenCategory].category}
                Class: ${classType}
                Subscription: ${subscriptionType}
                Price: ${price + ' CHF'}`);
    };

    return (
        <div className="grid grid-cols-1 place-items-center m-2">
            <div className="m-2">Order Starting</div>
            <DatePicker className="text-black rounded-md text-center" selected={startDate} onChange={(date) => setStartDate(date)} />
            <div className="grid grid-cols-2 place-items-center m-12 gap-4">
                <div className="col-span-2 flex gap-4">
                    <div>
                        <input className="mr-2" type="radio" id="firstClass" value={0} name="class" onChange={(e) => setChosenClass(e.target.value)} />
                        <label htmlFor="firstClass">First Class</label>
                    </div>
                    <div>
                        <input className="mr-2" type="radio" id="secondClass" value={1} name="class" onChange={(e) => setChosenClass(e.target.value)} />
                        <label htmlFor="secondClass">Second Class</label>
                    </div>
                </div>
                <div className="col-span-2 flex gap-4">
                    <div>
                        <input className="mr-2" type="radio" id="yearSubscription" value={0} name="subscription" onChange={(e) => setSubscriptionDuration(e.target.value)} />
                        <label htmlFor="yearSubscription">Year Subscription Class</label>
                    </div>
                    <div>
                        <input className="mr-2" type="radio" id="monthSubscription" value={1} name="subscription" onChange={(e) => setSubscriptionDuration(e.target.value)} />
                        <label htmlFor="monthSubscription">Month Subscription</label>
                    </div>
                </div>
                <select className="text-black rounded-md text-center" value={chosenCategory} onChange={(e) => setChosenCategory(e.target.value)}>
                    {array.map((item, index) => (
                        <option key={index} value={index}>{item.category}</option>
                    ))}
                </select>
                <div className="bg-indigo-950 rounded-md flex m-2">
                    <div className="m-4">Subscription Cost:</div>
                    <div className="m-4">{array[chosenCategory].prices[subscriptionDuration][chosenClass] + " CHF"}</div>
                </div>
                <div className="flex justify-end col-span-2">
                    <Button size="xm" className="m-2 p-2 bg-gradient-to-r from-gray-700 to-indigo-900 hover:to-indigo-950 hover:from-gray-950" onClick={handleSubmit}>
                        Order
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SBBForm;
