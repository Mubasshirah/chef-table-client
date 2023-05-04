import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllRecipe from '../allRecipe/AllRecipe';

const SingleChefRecipe = () => {
    const chef=useLoaderData();
    const {name,chefPicture,yearsOfExperience,numberOfRecipes,likes,bio,recipes}=chef;
    return (
       <div>
         <div className='d-flex d-lg-flex flex-column flex-lg-row gap-5 p-5 align-items-center' style={{backgroundColor:'rgba(0, 0, 0, 0.1)',marginTop:'50px'}}>
            <div style={{width:'100%'}}><img src={chefPicture} alt="" className='img-fluid' style={{width:'100%',height:'350px'}}/></div>
            <div className='bg-white w-100 p-5' style={{boxShadow:'5px 5px 10px grey'}}>
           <h3>Name: {name}</h3>
           <p>Bio: {bio}</p>
           <p>Likes: {likes}</p>
           <p>Number of Recipes: {numberOfRecipes}</p>
           <p>Experience: {yearsOfExperience} years</p>
            </div>
        </div>
         <div>
            <h2 className='text-center mt-5'>Chef's Signature Recipes</h2>
            <hr className='w-50 mx-auto mb-5'/>
            <div className='row'>
            {
            recipes.map(recipe=><AllRecipe recipe={recipe} key={recipe.id}></AllRecipe>)
            }
            </div>
         </div>
       </div>
    );
};

export default SingleChefRecipe;