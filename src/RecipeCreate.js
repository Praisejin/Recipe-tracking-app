import React, { useState } from "react";

function RecipeCreate(props) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const defaultData = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:""
  };
  
  const [formData,setFormData] = useState(defaultData);
  const resetForm = () => setFormData(defaultData);
  
  const handleChange = ({target}) => {
    setFormData({
      ...formData, [target.name]: target.value
    });
  };
  
  const handleSubmit = (event)=> {
    event.preventDefault();
    props.createRecipe(formData)
    setFormData(defaultData);
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody className="content_row">
          <tr>
            <td>
              <input type="text" value={formData.name} onChange={handleChange} name="name" required placeholder = "Name"/>
            </td>
            <td>
              <input type="text" value = {formData.cuisine} onChange= {handleChange} name="cuisine" required placeholder="Cuisine"/>
            </td>
            <td>
               <input type="url" value ={formData.photo} onChange={handleChange} name="photo" required placeholder = "URL"/>
            </td>
            <td>
                <textarea type= "text" value={formData.ingredients} onChange={handleChange} name ="ingredients" required placeholder ="Ingredients"/>
            </td>
            <td>
                <textarea type="text" value={formData.preparation} onChange={handleChange} name ="preparation" required placeholder = "Preparation"/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
