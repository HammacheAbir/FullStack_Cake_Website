import React, {useEffect, useState}  from 'react';

import './App.css'


import Recipe from './components/recipe'


const App =props=>{

  const app_id ="d32e923d"
  const app_key="e65acf9f9abef8dc227851b6e8981276"
  
  
 
  const [recipes, setRecipes]= useState([]);
  const [search, setSearch]= useState('');
  const [query, setQuery]= useState('cake');

  const url =`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}` 
  
  useEffect(()=>{
    getRecipes();
    console.log("fetching")
  },[query])
  
  const getRecipes = async()=>{
    const response= await fetch(url);
    const data= await response.json();

    setRecipes(data.hits)
    console.log(data.hits)
  }

  const onChangeValue=(e)=>{
    e.preventDefault()
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch=(e)=>{
    e.preventDefault();
    setQuery(search)
  }

    return (
      <div className="App">
        <h1 class="display-2 text-center"><strong>Cake Recipes</strong></h1>
        <form className="input-group" onSubmit={getSearch} >
          <input className="form-control" type="text" value={search} onChange={onChangeValue}/>
          <button className="btn btn-primary" type="submit"> search </button>
        </form>

        <div className="row">
          {recipes.map((recipe,index)=>(
          <Recipe key={index} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />

        ))}
          
        </div>


      </div>
    );
  
}

export default App;
