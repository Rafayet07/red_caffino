import CustomImage from "./CustomImage";
import React from 'react';

export default function RecipeCard({recipe}) {
  return <div className='recipe-card'>

      <CustomImage imgSrc={recipe.image} pt={"65%"}/>
      <div className="receipe-card-info">
          <img  className="author-img" src={recipe.authorImg} alt=""/>
          <p className="recipe-title">{recipe.title}</p>
          <p className="recipe-desc">Flavoring or seasoning, anything added to food for the flavor it imparts or the act of adding flavor to food. Think of herbs, spices, condiments, seasonings, or some food additives as different flavorings.</p>
          <a  className="view-btn" href="#!" >VIEW RECIPE</a>
          
      </div>
  </div>;
}
