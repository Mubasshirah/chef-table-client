import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllRecipe = ({recipe}) => {
  
    const showToastMessage = () => {
        toast.success('You have selected this as tour favourite!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const {ingredients,recipeName,cookingMethod,rating,photo}=recipe;
    return (
        <div className='col-lg-6 col-sm-12'>
            <Card className=' mb-4'>
          <Card.Img   src={photo}className='mx-auto rounded img-fluid' style={{height:'300px'}}/>
          <Card.Body >
            <Card.Title className='pb-4 text-bold'>{recipeName}</Card.Title>
          <div className='mt-0 '>
            <h5>Ingredients:</h5>
            <hr className='w-50'/>
            {
                ingredients.map(ingredient=><li style={{listStyleType:'none'}}>{ingredient}</li>)
            }
          </div>
          <h5 className='mt-3'>Cooking method:</h5>
          <hr className='w-50'/>
          <p>{cookingMethod}</p>
          <div >
            <Rating
  placeholderRating={rating ?.number}
  readonly
  emptySymbol={<FaRegStar></FaRegStar>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar></FaStar>}
/></div>
           <Button onClick={showToastMessage} className='btn btn-dark mt-4'>Favourite</Button>
           <ToastContainer />
          </Card.Body>
        </Card>
        </div>
    );
};

export default AllRecipe;