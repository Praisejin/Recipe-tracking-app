import React from "react";
import Recipe from "./Recipe"

function RecipeList(props) {
  
  
  
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="content_row">
          { 
            props.recipes.map((recipe, index) => 
              ( <Recipe key={index} index={index} deleteRecipe={props.deleteRecipe} recipe={recipe} /> )
            ) 
          }
        </tbody>
      </table>
    </div>
  );
}
export default RecipeList;
