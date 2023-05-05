import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllRecipe = ({ recipe }) => {

  const showToastMessage = () => {
    toast.success('You have selected this as your favourite!', {
      position: toast.POSITION.TOP_RIGHT
    });
  };
  const { ingredients, recipeName, cookingMethod, rating, photo } = recipe;
  return (
    <div >
      <div className='d-lg-flex flex-lg-row align-items-center bg-white text-dark mb-4 p-3 rounded'>
      <div className='w-lg-50'>
        <div><img src={photo} className='mx-auto rounded img-fluid w-100' style={{ height: '300px' }} alt="" />
        </div>
        <div >
          <h3>{recipeName}</h3>
          <h5>Ingredients:</h5>
          <hr className='w-lg-50' />
          {
            ingredients.map(ingredient => <li style={{ listStyleType: 'none' }}>{ingredient}</li>)
          }
        </div>
      </div>
      <div className='w-lg-50 ps-lg-4'>
        <h5 className='mt-3'>Cooking method:</h5>
        <hr className='w-50' />
        <p>{cookingMethod}</p>
       
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
            fullSymbol={<FaStar></FaStar>}/>
        <div>
        <Button onClick={showToastMessage} className='btn btn-dark mt-4'>Favourite</Button>
        </div>
        <ToastContainer />
      </div>
      </div>
    </div>
    
  );
};

export default AllRecipe;