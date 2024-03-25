import React from 'react';
import SBBForm from '../components/SBBForm/SBBForm';
import { SBBdata } from '../libary/data/SBBdata';



const SBB = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mt-8">SBB</h1>
            <SBBForm array={SBBdata} />
        </div>
    );
};

export default SBB;