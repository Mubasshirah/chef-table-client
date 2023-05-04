import React from 'react';
import banner from '../../assets/banner.webp'
const Banner = () => {
    return (
        <div>
           <div className='position-relative ' >
           <img src={banner} alt="" style={{width:'100%',height:'100vh'}}/>
           </div>
           <div className='position-absolute' style={{width:'100%',height:'100vh', top:'36px',backgroundColor:'rgba(0, 0, 0, 0.4)'}} >
            
            <div>
            <h1 className='text-white ' style={{fontSize:'6vw',marginLeft:'10vw',paddingTop:'150px'}}>Feel the </h1>
            <h1 className='text-white ' style={{fontSize:'6vw',marginLeft:'10vw'}}>Authentic & </h1>
            <h1 className='text-white ' style={{fontSize:'6vw',marginLeft:'10vw'}}>Original Taste</h1>
          
            <button className='btn btn-outline-light px-5 text-bold rounded-pill mt-4' style={{fontSize:'2vw',marginLeft:'10%'}}>See menu</button>
            </div>
            
           </div>
        </div>
    );
};

export default Banner;