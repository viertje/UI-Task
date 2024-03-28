import React from 'react';
import SBBForm from '../components/SBBForm/SBBForm';
import { SBBdata } from '../libary/data/SBBdata';



const SBB = () => {
    return (
        <div className='flex justify-center'>
            <SBBForm array={SBBdata} />
        </div>
    );
};

export default SBB;