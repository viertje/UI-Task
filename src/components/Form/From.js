import React, { useState } from 'react';

const Form = ({ array, total }) => {
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your order:
        Products: ${array.map((i) => i.name).join(', ')}
        Total: ${total}    
        Name: ${name}
        First Name: ${firstName}
        Street: ${street}
        City: ${city}
        Zipcode: ${zipcode}
        Country: ${country}
        Phone Number: ${phoneNumber}
        Email: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-2 p-4 m-4'>
                <input className='mx-2 rounded-md text-black' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
                <input className='rounded-md mx-2 text-black' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Firstname' />
                <input className='rounded-md mx-2 text-black' type="text" value={street} onChange={(e) => setStreet(e.target.value)} placeholder='Street' />
                <input className='rounded-md mx-2 text-black' type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' />
                <input className='rounded-md mx-2 text-black' type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder='Zip Code' />
                <input className='rounded-md mx-2 text-black' type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder='Country' />
                <input className='rounded-md mx-2 text-black' type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' />
                <input className='rounded-md mx-2 text-black' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <div className='flex justify-between mx-2 gap-4'>
                <input className='place-self-center rounded-md' type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
                <label className='text-white'>I agree to the terms and conditions</label>
                </div>
                <button className='place-self-center bg-gradient-to-r from-gray-700 to-indigo-900 hover:to-indigo-950 hover:from-gray-950 border-2 border-white rounded-md p-2' type="submit">Bestellen</button>
        </form>
    );
};

export default Form;
