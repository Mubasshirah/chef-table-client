import React from 'react';
import banner from '../../assets/banner.webp'
const Banner = () => {
    return (
        <div>
           <div className='position-relative' >
           <img src={banner} alt="" className=' w-100 ' style={{height:'650px'}}/>
           </div>
           <div className='position-absolute  ' style={{paddingLeft:'10%', paddingTop:'10%',top:'56px',width:'100%',height:'650px', backgroundColor:'rgba(0, 0, 0, 0.4)'} } >
            <div className='text-white' >
            <h1 style={{fontSize:'6.5rem'}}>Feel the </h1>
            <h1 style={{fontSize:'6.5rem'}}>Authentic & </h1>
            <h1 style={{fontSize:'6.5rem'}}> Original Taste</h1>
            </div>
            <button className='btn btn-outline-light px-5 text-bold rounded-pill mt-4' style={{fontSize:'1.5rem'}}>See menu</button>
            
           </div>
        </div>
    );
};

export default Banner;