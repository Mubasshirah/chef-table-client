import React, { useEffect, useState } from 'react';
import { Container} from 'react-bootstrap';
import SingleChef from '../singlechef/SingleChef';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Chef = () => {
    const [chefs,setChef]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res=>res.json())
        .then(data=>setChef(data))
    },[])
    return (
        <Container>
            <h1 className='text-center mt-5'>Meet Out Chefs</h1>
            <hr  className='w-25 mx-auto mb-5'/>
            
    <div className='row'>
   
      {chefs.map(chef=><SingleChef key={chef.id} chef={chef}></SingleChef>)}   
      
    </div>
        </Container>
    );
};

export default Chef;