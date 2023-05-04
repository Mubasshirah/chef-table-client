import React from 'react';
import error from '../../assets/error.avif'
const Error = () => {
    return (
        <div style={{width:'50%'}} className='mx-auto'>
           <img src={error} alt="" className='  img-fluid ' />
        </div>
    );
};

export default Error;