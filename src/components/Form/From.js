import React, { useState } from 'react';

const Form = ({ array, total }) => {
    const [gender, setGender] = useState('');
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);

    const countryList = ["Switzerland", "Germany", "Austria", "Netherlands", "France", "Italy", "Spain", "Portugal", "Greece", "United Kingdom", "Ireland", "Sweden", "Norway", "Denmark", "Finland", "Poland", "Czech Republic", "Slovakia", "Hungary", "Slovenia", "Croatia", "Bosnia and Herzegovina", "Serbia", "Montenegro", "Albania", "Macedonia", "Bulgaria", "Romania", "Moldova", "Ukraine", "Belarus", "Russia", "Estonia", "Latvia", "Lithuania", "Belgium", "Luxembourg", "Liechtenstein", "Monaco", "Andorra", "San Marino", "Vatican City", "Malta", "Cyprus",]

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your order:
        Products: ${array.map((i) => i.name).join(', ')}
        Total: ${total}
        Gender: ${gender}
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
            <div className='flex justify-start mx-2 gap-4 col-span-2'>
                <div>
                    <input className='mr-2' type="radio" id="male" value="Male" name="gender" onChange={(e) => setGender(e.target.value)} />
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input className='mr-2' type="radio" id="female" value="Female" name="gender" onChange={(e) => setGender(e.target.value)} />
                    <label htmlFor="female">Female</label>
                </div>
                <div>
                    <input className='mr-2' type="radio" id="others" value="Other" name="gender" onChange={(e) => setGender(e.target.value)} />
                    <label htmlFor="others">Others</label>
                </div>
            </div>
            <input className='mx-2 rounded-md text-black' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
            <input className='rounded-md mx-2 text-black' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Firstname' />
            <input className='rounded-md mx-2 text-black' type="text" value={street} onChange={(e) => setStreet(e.target.value)} placeholder='Street' />
            <input className='rounded-md mx-2 text-black' type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' />
            <input className='rounded-md mx-2 text-black' type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder='Zip Code' />
            <select className='rounded-md mx-2 text-black' value={country} onChange={(e) => setCountry(e.target.value)} required>
                <option value="" disabled>Country</option>
                {countryList.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </select>
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
