import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SingleChef = ({chef}) => {
    const {id,name,chefPicture,yearsOfExperience,numberOfRecipes,likes,views}=chef;
    return (
        <div className='col-lg-4 col-sm-12 ' >
            <Card className='py-4 mb-4' style={{boxShadow:'3px 3px 10px grey'}}>
          <Card.Img variant="top"  src={chefPicture}className='mx-auto rounded' style={{height:'200px',width:'300px'}}/>
          <Card.Body className=' text-center'>
            <Card.Title className='pb-4'>{name}</Card.Title>
           <p > Years of Experience: {yearsOfExperience}</p>
           <hr className='py-0 my-0'/>
           <p > Number of Recipes: {numberOfRecipes}</p>
           <hr className='py-0 my-0' />
           <p > Likes: {likes}</p>
           <hr className='py-0 mt-0 mb-5' />
            <Link to={`/chef/${id}`}><Button className='btn btn-dark'>View Recipes</Button></Link>
          </Card.Body>
        </Card>
        </div>
    );
};

export default SingleChef;