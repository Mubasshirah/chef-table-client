import React, { useEffect, useState } from 'react';
import { Container} from 'react-bootstrap';
import SingleChef from '../singlechef/SingleChef';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Chef = () => {
    const [chefs,setChef]=useState([]);
    useEffect(()=>{
        fetch('https://assignment-10-chef-table-server-mubasshirah.vercel.app/chef')
        .then(res=>res.json())
        .then(data=>setChef(data))
    },[])
    return (
        <Container className=''>
            <h1 className='text-center text-white mt-5'>Meet Out Chefs</h1>
            <hr  className='w-25 text-white mx-auto mb-5'/>
            
    <div className='row mb-5'>
   
      {chefs.map(chef=><SingleChef key={chef.id} chef={chef}></SingleChef>)}   
      
    </div>
        </Container>
    );
};

export default Chef;